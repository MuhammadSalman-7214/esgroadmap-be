import cron from "node-cron";
import fs from "fs";
import fsPromises from "fs/promises";
import path from "path";
import { prisma } from "../server.js";
import PDFDocument from "pdfkit";
import { sendEmail } from "../utils/email.js";
import dotenv from "dotenv";
import compressPdf from "./pdfCompression.js";

dotenv.config();

export const runDailyReportJob = async () => {
  console.log("🔁 Running daily keyword check...");

  const searches = await prisma.search.findMany({
    include: { user: true },
  });

  const reportsDir = path.join("reports");
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir);
  }

  for (const search of searches) {
    try {
      const uploadDateFilter =
        search.lastChecked !== null
          ? { gte: new Date(search.lastChecked).toISOString() }
          : undefined;

      const whereClause = {
        [search.tableName]: 1,
        Target_sentence: {
          contains: search.keyword,
        },
        ...(uploadDateFilter && { upload_date: uploadDateFilter }),
      };

      const results = await prisma.sentenceallview.findMany({
        where: whereClause,
        select: {
          id: true,
          Company: true,
          DocURL: true,
          Target_sentence: true,
          SentenceTargetYear: true,
          upload_date: true,
          Country: true,
          SectorCode1: true,
          SectorName1: true,
        },
        orderBy: {
          upload_date: "desc",
        },
      });

      console.log(
        `Found ${results.length} results for keyword "${search.keyword}" in target sentence "${search.tableName}"`
      );

      if (results.length > 0) {
        const pdfPath = path.join(
          reportsDir,
          `report-${search.userId}-${Date.now()}.pdf`
        );

        await new Promise<void>((resolve, reject) => {
          const stream = fs.createWriteStream(pdfPath);
          const doc = new PDFDocument({
            margin: 20,
            size: "A4",
            layout: "landscape",
          });

          doc.pipe(stream);
          doc
            .font("Helvetica-Bold")
            .fontSize(16)
            .text(
              `Search Report for keyword "${search.keyword}" in target sentence "${search.tableName}"`,
              { align: "center" }
            );
          doc.moveDown(1.5);

          const headers = [
            "ID",
            "Company",
            "DocURL",
            "Target Sentence",
            "Target Year(s)",
            "Country",
            "Sector Code #1",
            "Sector Name #1",
            "Upload Date",
          ];
          const columnWidths = [60, 60, 60, 200, 80, 80, 80, 100, 80];
          const startX = doc.x;
          let y = doc.y;

          // Draw header
          doc.font("Helvetica-Bold").fontSize(10);

          headers.forEach((header, i) => {
            const colX =
              startX + columnWidths.slice(0, i).reduce((a, b) => a + b, 0);
            doc.save().rect(colX, y, columnWidths[i], 20).fill("#219e98");
            doc.restore().rect(colX, y, columnWidths[i], 20).stroke("white");
            doc.fillColor("white").text(header, colX + 2, y + 5, {
              width: columnWidths[i] - 4,
              align: "center",
            });
          });

          y += 20;

          // Draw rows
          doc.font("Helvetica").fontSize(12);
          results.forEach((item) => {
            const padding = 5;
            const values = [
              item.id,
              item.Company,
              item.DocURL || "N/A",
              (item.Target_sentence || "")
                .replace(/[\r\n\t]/g, " ")
                .replace(/[^\x20-\x7E]/g, "")
                .slice(0, 1000),
              Array.isArray(item.SentenceTargetYear)
                ? item.SentenceTargetYear.join(", ")
                : item.SentenceTargetYear || "N/A",
              item.Country,
              item.SectorCode1,
              item.SectorName1,
              item.upload_date?.split("T")[0] || "N/A",
            ];

            // Measure row height based on tallest cell
            const cellHeights = values.map((val, i) =>
              doc.heightOfString(String(val), {
                width: columnWidths[i] - padding * 2,
                align: "left",
              })
            );
            const rowHeight = Math.max(
              ...cellHeights.map((h) => h + padding * 2),
              20
            );

            // Check for page break
            if (y + rowHeight > doc.page.height - 50) {
              doc.addPage();
              y = doc.y;
            }

            // Draw row cells
            values.forEach((val, i) => {
              const x =
                startX + columnWidths.slice(0, i).reduce((a, b) => a + b, 0);
              doc.rect(x, y, columnWidths[i], rowHeight).stroke("black");

              const text =
                val !== null && val !== undefined ? String(val) : "N/A";

              if (headers[i] === "DocURL" && text !== "N/A") {
                doc
                  .fillColor("blue")
                  .text("Open Link", x + padding, y + padding, {
                    width: columnWidths[i] - padding * 2,
                    align: "left",
                    link: text,
                    underline: true,
                  });
              } else {
                doc.fillColor("black").text(text, x + padding, y + padding, {
                  width: columnWidths[i] - padding * 2,
                  align: "left",
                });
              }
            });

            y += rowHeight;
          });

          doc.end();
          stream.on("finish", resolve);
          stream.on("error", reject);
        });

        await compressPdf(pdfPath);

        await sendEmail(
          search.user.email,
          `Daily Report - Keyword: ${search.keyword}`,
          `<p>Hello, please find today's report for your saved search: <strong>${search.keyword}</strong>.</p>`,
          pdfPath
        );

        await prisma.search.update({
          where: { id: search.id },
          data: { lastChecked: new Date() },
        });

        await fsPromises.unlink(pdfPath);

        console.log(`✅ Report sent to ${search.user.email}`);
      } else {
        console.log(`ℹ️ No updates for "${search.keyword}"`);
      }
    } catch (err) {
      console.error(`❌ Error checking keyword: ${search.keyword}`, err);
    }
  }
};

import { PDFDocument } from "pdf-lib";
import fs from "fs/promises";

const compressPdf = async (inputPath: string) => {
  const existingPdfBytes = await fs.readFile(inputPath); // ✅ use `fs`
  const pdfDoc = await PDFDocument.load(existingPdfBytes); // ✅ no dynamic import needed here

  const compressedPdfBytes = await pdfDoc.save({ useObjectStreams: true });

  await fs.writeFile(inputPath, compressedPdfBytes); // ✅ use `fs`

  console.log("📦 PDF compressed successfully");
};

export default compressPdf;
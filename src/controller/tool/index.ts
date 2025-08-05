import { Response } from "express";
import { AuthenticatedRequest } from "../../types/request.js";
import { prisma } from "../../server.js";
import { safeSearch } from "../../utils/search.js";

export const carbonReduction = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  let response: { status?: number; message?: string | Object | Array<Object> } =
    {};

  try {
    const {
      search,
      pagination = "true",
      country,
      company,
      year,
      sector,
      sectorName,
      date,
    } = req.query;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const isPaginated = pagination !== "false";
    const searchStr = typeof search === "string" ? search : "";
    let baseFilter;
    if (country || company || year || sector || sectorName || date) {
      baseFilter = {
        sentence_carbon: 1,
        ...(date &&
          (() => {
            const [day, month, year] = String(date).split("-").map(Number);
            const startDate = new Date(year, month - 1, day, 0, 0, 0); // 00:00:00
            const endDate = new Date(year, month - 1, day + 1, 0, 0, 0); // next day 00:00:00

            return {
              upload_date: {
                gte: startDate.toISOString(),
                lt: endDate.toISOString(),
              },
            };
          })()),
        ...(country && { Country: country }),
        ...(company && {
          Company:
            typeof company === "string"
              ? company.replace(/['"]+/g, "").trim()
              : undefined,
        }),
        ...(sector && { SectorCode1: sector }),
        ...(sectorName && { SectorName1: sectorName }),
        ...(year && {
          SentenceTargetYear: {
            contains: year,
          },
        }),
      };
    } else {
      baseFilter = { sentence_carbon: 1 };
    }
    const whereClause = safeSearch(baseFilter, searchStr, [
      "Company",
      "Target_sentence",
      "SentenceTargetYear",
      "upload_date",
      "Country",
      "SectorCode1",
      "SectorName1",
    ]);

    let carbonSentence;
    let totalPages = 1;

    if (isPaginated) {
      const dataCount = await prisma.sentenceallview.count({
        where: whereClause,
      });
      totalPages = Math.ceil(dataCount / limit);

      carbonSentence = await prisma.sentenceallview.findMany({
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
        orderBy: { id: "asc" },
        skip: (page - 1) * limit,
        take: limit,
      });
    } else {
      carbonSentence = await prisma.sentenceallview.findMany({
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
        orderBy: { id: "asc" },
      });
    }
    response.status = 200;
    response.message = { carbonSentence, totalPages };
  } catch (err: any) {
    response.status = 400;
    response.message = err.message;
  }
  res.status(response.status).json(response.message);
};

export const wasteAndRecycling = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  let response: {
    status?: number;
    message?: string | Object | Array<Object>;
  } = {};

  try {
    const {
      search,
      pagination = "true",
      country,
      company,
      year,
      sector,
      sectorName,
      date,
    } = req.query;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const isPaginated = pagination !== "false";
    const searchStr = typeof search === "string" ? search : "";
    let baseFilter;
    if (country || company || year || sector || sectorName || date) {
      baseFilter = {
        sentence_waste: 1,
        ...(date &&
          (() => {
            const [day, month, year] = String(date).split("-").map(Number);
            const startDate = new Date(year, month - 1, day, 0, 0, 0); // 00:00:00
            const endDate = new Date(year, month - 1, day + 1, 0, 0, 0); // next day 00:00:00

            return {
              upload_date: {
                gte: startDate.toISOString(),
                lt: endDate.toISOString(),
              },
            };
          })()),
        ...(country && { Country: country }),
        ...(company && {
          Company:
            typeof company === "string"
              ? company.replace(/['"]+/g, "").trim()
              : undefined,
        }),
        ...(sector && { SectorCode1: sector }),
        ...(sectorName && { SectorName1: sectorName }),
        ...(year && {
          SentenceTargetYear: {
            contains: year,
          },
        }),
      };
    } else {
      baseFilter = { sentence_waste: 1 };
    }
    const whereClause = safeSearch(baseFilter, searchStr, [
      "Company",
      "Target_sentence",
      "SentenceTargetYear",
      "upload_date",
      "Country",
      "SectorCode1",
      "SectorName1",
    ]);

    let wasteSentence;
    let totalPages = 1;

    if (isPaginated) {
      const dataCount = await prisma.sentenceallview.count({
        where: whereClause,
      });
      totalPages = Math.ceil(dataCount / limit);

      wasteSentence = await prisma.sentenceallview.findMany({
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
        orderBy: { id: "asc" },
        skip: (page - 1) * limit,
        take: limit,
      });
    } else {
      wasteSentence = await prisma.sentenceallview.findMany({
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
        orderBy: { id: "asc" },
      });
    }
    response.status = 200;
    response.message = { wasteSentence, totalPages };
  } catch (err: any) {
    response.status = 400;
    response.message = err.message;
  }
  res.status(response.status).json(response.message);
};

export const waterManagement = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  let response: {
    status?: number;
    message?: string | Object | Array<Object>;
  } = {};

  try {
    const {
      search,
      pagination = "true",
      country,
      company,
      year,
      sector,
      sectorName,
      date,
    } = req.query;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const isPaginated = pagination !== "false";
    const searchStr = typeof search === "string" ? search : "";
    let baseFilter;
    if (country || company || year || sector || sectorName || date) {
      baseFilter = {
        sentence_water: 1,
        ...(date &&
          (() => {
            const [day, month, year] = String(date).split("-").map(Number);
            const startDate = new Date(year, month - 1, day, 0, 0, 0); // 00:00:00
            const endDate = new Date(year, month - 1, day + 1, 0, 0, 0); // next day 00:00:00

            return {
              upload_date: {
                gte: startDate.toISOString(),
                lt: endDate.toISOString(),
              },
            };
          })()),
        ...(country && { Country: country }),
        ...(company && {
          Company:
            typeof company === "string"
              ? company.replace(/['"]+/g, "").trim()
              : undefined,
        }),
        ...(sector && { SectorCode1: sector }),
        ...(sectorName && { SectorName1: sectorName }),
        ...(year && {
          SentenceTargetYear: {
            contains: year,
          },
        }),
      };
    } else {
      baseFilter = { sentence_water: 1 };
    }
    const whereClause = safeSearch(baseFilter, searchStr, [
      "Company",
      "Target_sentence",
      "SentenceTargetYear",
      "upload_date",
      "Country",
      "SectorCode1",
      "SectorName1",
    ]);

    let waterSentence;
    let totalPages = 1;

    if (isPaginated) {
      const dataCount = await prisma.sentenceallview.count({
        where: whereClause,
      });
      totalPages = Math.ceil(dataCount / limit);

      waterSentence = await prisma.sentenceallview.findMany({
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
        orderBy: { id: "asc" },
        skip: (page - 1) * limit,
        take: limit,
      });
    } else {
      waterSentence = await prisma.sentenceallview.findMany({
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
        orderBy: { id: "asc" },
      });
    }
    response.status = 200;
    response.message = { waterSentence, totalPages };
  } catch (err: any) {
    response.status = 400;
    response.message = err.message;
  }
  res.status(response.status).json(response.message);
};

export const sentenceGender = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  let response: {
    status?: number;
    message?: string | Object | Array<Object>;
  } = {};

  try {
    const {
      search,
      pagination = "true",
      country,
      company,
      year,
      sector,
      sectorName,
      date,
    } = req.query;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const isPaginated = pagination !== "false";
    const searchStr = typeof search === "string" ? search : "";
    let baseFilter;
    if (country || company || year || sector || sectorName || date) {
      baseFilter = {
        sentence_gender: 1,
        ...(date &&
          (() => {
            const [day, month, year] = String(date).split("-").map(Number);
            const startDate = new Date(year, month - 1, day, 0, 0, 0); // 00:00:00
            const endDate = new Date(year, month - 1, day + 1, 0, 0, 0); // next day 00:00:00

            return {
              upload_date: {
                gte: startDate.toISOString(),
                lt: endDate.toISOString(),
              },
            };
          })()),
        ...(country && { Country: country }),
        ...(company && {
          Company:
            typeof company === "string"
              ? company.replace(/['"]+/g, "").trim()
              : undefined,
        }),
        ...(sector && { SectorCode1: sector }),
        ...(sectorName && { SectorName1: sectorName }),
        ...(year && {
          SentenceTargetYear: {
            contains: year,
          },
        }),
      };
    } else {
      baseFilter = { sentence_gender: 1 };
    }
    const whereClause = safeSearch(baseFilter, searchStr, [
      "Company",
      "Target_sentence",
      "SentenceTargetYear",
      "upload_date",
      "Country",
      "SectorCode1",
      "SectorName1",
    ]);

    let genderSentence;
    let totalPages = 1;

    if (isPaginated) {
      const dataCount = await prisma.sentenceallview.count({
        where: whereClause,
      });
      totalPages = Math.ceil(dataCount / limit);

      genderSentence = await prisma.sentenceallview.findMany({
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
        orderBy: { id: "asc" },
        skip: (page - 1) * limit,
        take: limit,
      });
    } else {
      genderSentence = await prisma.sentenceallview.findMany({
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
        orderBy: { id: "asc" },
      });
    }
    response.status = 200;
    response.message = { genderSentence, totalPages };
  } catch (err: any) {
    response.status = 400;
    response.message = err.message;
  }
  res.status(response.status).json(response.message);
};

export const supplyChain = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  let response: {
    status?: number;
    message?: string | Object | Array<Object>;
  } = {};

  try {
    const {
      search,
      pagination = "true",
      country,
      company,
      year,
      sector,
      sectorName,
      date,
    } = req.query;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const isPaginated = pagination !== "false";
    const searchStr = typeof search === "string" ? search : "";
    let baseFilter;
    if (country || company || year || sector || sectorName || date) {
      baseFilter = {
        sentence_suppliers: 1,
        ...(date &&
          (() => {
            const [day, month, year] = String(date).split("-").map(Number);
            const startDate = new Date(year, month - 1, day, 0, 0, 0); // 00:00:00
            const endDate = new Date(year, month - 1, day + 1, 0, 0, 0); // next day 00:00:00

            return {
              upload_date: {
                gte: startDate.toISOString(),
                lt: endDate.toISOString(),
              },
            };
          })()),
        ...(country && { Country: country }),
        ...(company && {
          Company:
            typeof company === "string"
              ? company.replace(/['"]+/g, "").trim()
              : undefined,
        }),
        ...(sector && { SectorCode1: sector }),
        ...(sectorName && { SectorName1: sectorName }),
        ...(year && {
          SentenceTargetYear: {
            contains: year,
          },
        }),
      };
    } else {
      baseFilter = { sentence_suppliers: 1 };
    }
    const whereClause = safeSearch(baseFilter, searchStr, [
      "Company",
      "Target_sentence",
      "SentenceTargetYear",
      "upload_date",
      "Country",
      "SectorCode1",
      "SectorName1",
    ]);

    let supplyChain;
    let totalPages = 1;

    if (isPaginated) {
      const dataCount = await prisma.sentenceallview.count({
        where: whereClause,
      });
      totalPages = Math.ceil(dataCount / limit);

      supplyChain = await prisma.sentenceallview.findMany({
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
        orderBy: { id: "asc" },
        skip: (page - 1) * limit,
        take: limit,
      });
    } else {
      supplyChain = await prisma.sentenceallview.findMany({
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
        orderBy: { id: "asc" },
      });
    }
    response.status = 200;
    response.message = { supplyChain, totalPages };
  } catch (err: any) {
    response.status = 400;
    response.message = err.message;
  }
  res.status(response.status).json(response.message);
};

export const renewables = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  let response: {
    status?: number;
    message?: string | Object | Array<Object>;
  } = {};

  try {
    const {
      search,
      pagination = "true",
      country,
      company,
      year,
      sector,
      sectorName,
      date,
    } = req.query;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const isPaginated = pagination !== "false";
    const searchStr = typeof search === "string" ? search : "";
    let baseFilter;
    if (country || company || year || sector || sectorName || date) {
      baseFilter = {
        sentence_renewables: 1,
        ...(date &&
          (() => {
            const [day, month, year] = String(date).split("-").map(Number);
            const startDate = new Date(year, month - 1, day, 0, 0, 0); // 00:00:00
            const endDate = new Date(year, month - 1, day + 1, 0, 0, 0); // next day 00:00:00

            return {
              upload_date: {
                gte: startDate.toISOString(),
                lt: endDate.toISOString(),
              },
            };
          })()),
        ...(country && { Country: country }),
        ...(company && {
          Company:
            typeof company === "string"
              ? company.replace(/['"]+/g, "").trim()
              : undefined,
        }),
        ...(sector && { SectorCode1: sector }),
        ...(sectorName && { SectorName1: sectorName }),
        ...(year && {
          SentenceTargetYear: {
            contains: year,
          },
        }),
      };
    } else {
      baseFilter = { sentence_renewables: 1 };
    }
    const whereClause = safeSearch(baseFilter, searchStr, [
      "Company",
      "Target_sentence",
      "SentenceTargetYear",
      "upload_date",
      "Country",
      "SectorCode1",
      "SectorName1",
    ]);

    let renewablesSentence;
    let totalPages = 1;

    if (isPaginated) {
      const dataCount = await prisma.sentenceallview.count({
        where: whereClause,
      });
      totalPages = Math.ceil(dataCount / limit);

      renewablesSentence = await prisma.sentenceallview.findMany({
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
        orderBy: { id: "asc" },
        skip: (page - 1) * limit,
        take: limit,
      });
    } else {
      renewablesSentence = await prisma.sentenceallview.findMany({
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
        orderBy: { id: "asc" },
      });
    }
    response.status = 200;
    response.message = { renewablesSentence, totalPages };
  } catch (err: any) {
    response.status = 400;
    response.message = err.message;
  }
  res.status(response.status).json(response.message);
};

export const allSentence = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  let response: { status?: number; message?: any } = {};

  try {
    const {
      search,
      country,
      pagination = "true",
      company,
      year,
      sector,
      sectorName,
      date,
    } = req.query;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const isPaginated = pagination !== "false";
    const searchStr = typeof search === "string" ? search : "";
    let baseFilter;
    if (country || company || year || sector || sectorName || date) {
      baseFilter = {
        ...(date &&
          (() => {
            const [day, month, year] = String(date).split("-").map(Number);
            const startDate = new Date(year, month - 1, day, 0, 0, 0); // 00:00:00
            const endDate = new Date(year, month - 1, day + 1, 0, 0, 0); // next day 00:00:00

            return {
              upload_date: {
                gte: startDate.toISOString(),
                lt: endDate.toISOString(),
              },
            };
          })()),
        ...(country && { Country: country }),
        ...(company && {
          Company:
            typeof company === "string"
              ? company.replace(/['"]+/g, "").trim()
              : undefined,
        }),
        ...(sector && { SectorCode1: sector }),
        ...(sectorName && { SectorName1: sectorName }),
        ...(year && {
          SentenceTargetYear: {
            contains: year,
          },
        }),
      };
    } else {
      baseFilter = {};
    }
    const whereClause = safeSearch(baseFilter, searchStr, [
      "Company",
      "Target_sentence",
      "SentenceTargetYear",
      "upload_date",
      "Country",
      "SectorCode1",
      "SectorName1",
    ]);

    let allSentence;
    let totalPages = 1;

    if (isPaginated) {
      const [dataCount, paginatedData] = await Promise.all([
        prisma.sentenceallview.count({ where: whereClause }),
        prisma.sentenceallview.findMany({
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
          orderBy: { id: "asc" },
          skip: (page - 1) * limit,
          take: limit,
        }),
      ]);
      allSentence = paginatedData;
      totalPages = Math.ceil(dataCount / limit);
    } else {
      allSentence = await prisma.sentenceallview.findMany({
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
        orderBy: { id: "asc" },
      });
    }

    response.status = 200;
    response.message = { allSentence, totalPages };
  } catch (err: any) {
    response.status = 400;
    response.message = err.message;
  }

  res.status(response.status).json(response.message);
};

export const companyUniverse = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  let response: {
    status?: number;
    message?: string | Object | Array<Object>;
  } = {};

  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const {
      search,
      pagination = "true",
      country,
      company,
      sector,
      sectorName,
    } = req.query;
    const searchStr = typeof search === "string" ? search : "";
    const isPaginated = pagination !== "false";
    let baseFilter;
    if (country || company || sector || sectorName) {
      baseFilter = {
        ...(country && { Country: country }),
        ...(company && {
          Company:
            typeof company === "string"
              ? company.replace(/['"]+/g, "").trim()
              : undefined,
        }),
        ...(sector && { sector_code__1__NAICS_: sector }),
        ...(sectorName && { sector_name__1__NAICS_: sectorName }),
      };
    } else {
      baseFilter = {};
    }
    const whereClause = safeSearch(baseFilter, searchStr, [
      "Company",
      "Country",
      "sector_code__1__NAICS_",
      "sector_name__1__NAICS_",
    ]);

    let companyUniverse;
    let totalPages = 1;

    if (isPaginated) {
      const dataCount = await prisma.companyUniverse.count({
        where: whereClause,
      });
      totalPages = Math.ceil(dataCount / limit);
      companyUniverse = await prisma.companyUniverse.findMany({
        where: whereClause,
        select: {
          Company: true,
          Country: true,
          sector_code__1__NAICS_: true,
          sector_name__1__NAICS_: true,
        },
        skip: (page - 1) * limit,
        take: limit,
      });
    } else {
      companyUniverse = await prisma.companyUniverse.findMany({
        where: whereClause,
        select: {
          Company: true,
          Country: true,
          sector_code__1__NAICS_: true,
          sector_name__1__NAICS_: true,
        },
      });
    }
    response.status = 200;
    response.message = { companyUniverse, totalPages };
  } catch (err: any) {
    response.status = 400;
    response.message = err.message;
  }
  res.status(response.status).json(response.message);
};

export const saveSearch = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  let response: {
    status?: number;
    message?: string | Object | Array<Object>;
  } = {};
  try {
    const search = req.body.search;
    const { tableName } = req.body;
    const user = req.user;
    if (!search) {
      response.status = 400;
      response.message = "Search is required";
      res.status(response.status).json(response.message);
      return;
    }
    if (!user) {
      response.status = 400;
      response.message = "User not found";
      res.status(response.status).json(response.message);
      return;
    }
    const allowedTableName = [
      "sentence_carbon",
      "sentence_waste",
      "sentence_water",
      "sentence_gender",
      "sentence_suppliers",
      "sentence_renewables",
      "companyUniverse",
      "sentenseAllView",
    ];
    if (!allowedTableName.includes(tableName)) {
      response.status = 400;
      response.message = "Invalid search type provided";
      res.status(response.status).json(response.message);
      return;
    }
    const findSearch = await prisma.search.findFirst({
      where: {
        keyword: search,
      },
    });
    if (findSearch) {
      response.status = 400;
      response.message = "Search is already exist in storage";
      res.status(response.status).json(response.message);
      return;
    }
    const newSearch = await prisma.search.create({
      data: {
        userId: user.id,
        keyword: search,
        tableName: tableName,
      },
    });
    response.status = 200;
    response.message = {
      message: `Search saved successfully`,
      search: newSearch,
    };
  } catch (err) {
    response.status = 400;
    response.message = "Failed to save";
  }
  res.status(response.status).json(response.message);
};

export const getFiltersByTableName = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  let response: { status?: number; message?: any } = {};
  try {
    const { tableName }: any = req.query;
    let getFilter;

    const allowedTableName = [
      "sentence_carbon",
      "sentence_waste",
      "sentence_water",
      "sentence_gender",
      "sentence_suppliers",
      "sentence_renewables",
    ];

    if (allowedTableName.includes(tableName)) {
      getFilter = await prisma.sentenceallview.findMany({
        where: {
          [tableName]: 1,
        },
        select: {
          Country: true,
          SectorCode1: true,
          SectorName1: true,
          Company: true,
          SentenceTargetYear: true,
          upload_date: true,
        },
      });
    } else if (tableName === "companyUniverse") {
      getFilter = await prisma.companyUniverse.findMany({
        select: {
          Country: true,
          Company: true,
          sector_code__1__NAICS_: true,
          sector_name__1__NAICS_: true,
        },
      });
    } else if (tableName === "sentenceAllView") {
      getFilter = await prisma.sentenceallview.findMany({
        select: {
          Country: true,
          SectorCode1: true,
          SectorName1: true,
          Company: true,
          SentenceTargetYear: true,
          upload_date: true,
        },
      });
    } else {
      res.status(400).json({ message: "Invalid TableName" });
      return;
    }

    const uniqueCountries = [
      ...new Set(
        getFilter
          .map((item: any) => item.Country)
          .filter(Boolean)
          .sort()
      ),
    ];

    const uniqueCompanies = [
      ...new Set(
        getFilter
          .map((item: any) => item.Company)
          .filter(Boolean)
          .sort()
      ),
    ];

    const targetYears = [
      ...new Set(
        getFilter
          .map((item: any) => item.SentenceTargetYear)
          .filter(Boolean)
          .flatMap(
            (val: string) =>
              val
                .replace(/[\[\]]/g, "") // remove brackets
                .split(",") // split by comma
                .map((y) => parseInt(y.trim())) // convert to number
                .filter((y) => !isNaN(y)) // filter invalid
          )
      ),
    ].sort((a, b) => a - b);

    const uniqueSector = [
      ...new Set(
        getFilter
          .map((item: any) =>
            tableName === "companyUniverse"
              ? item.sector_code__1__NAICS_
              : item.SectorCode1
          )
          .filter(Boolean)
          .sort()
      ),
    ];

    const uniqueSectorNames = [
      ...new Set(
        getFilter
          .map((item: any) =>
            tableName === "companyUniverse"
              ? item.sector_name__1__NAICS_
              : item.SectorName1
          )
          .filter(Boolean)
          .sort()
      ),
    ];

    const uniqueDates = [
      ...new Set(
        getFilter
          .map((item: any) => {
            const d = item.upload_date;
            if (!d) return null;
            const dateObj = new Date(d);
            if (isNaN(dateObj.getTime())) return null;

const day = String(dateObj.getUTCDate()).padStart(2, "0");
const month = String(dateObj.getUTCMonth() + 1).padStart(2, "0");
const year = dateObj.getUTCFullYear();

return `${day}-${month}-${year}`;
          })
          .filter(Boolean) // Remove nulls
      ),
    ].sort((a: any, b: any) => {
      const [dayA, monthA, yearA] = a.split("-").map(Number);
      const [dayB, monthB, yearB] = b.split("-").map(Number);
      return (
        new Date(yearA, monthA - 1, dayA).getTime() -
        new Date(yearB, monthB - 1, dayB).getTime()
      );
    });

    response.status = 200;
    response.message = {
      uniqueDates,
      uniqueCountries,
      uniqueCompanies,
      targetYears,
      uniqueSector,
      uniqueSectorNames,
    };
  } catch (err) {
    response.status = 400;
    response.message = "Failed to fetch countries";
  }
  res.status(response.status).json(response.message);
};

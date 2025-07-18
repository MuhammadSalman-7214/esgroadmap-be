import express from "express";
import authenticateUser from "../../middleware/authenticateUser.js";
import {
  allSentence,
  carbonReduction,
  companyUniverse,
  getFiltersByTableName,
  renewables,
  saveSearch,
  sentenceGender,
  supplyChain,
  wasteAndRecycling,
  waterManagement,
} from "../../controller/tool/index.js";

const toolRouter = express.Router();

toolRouter.get(
  "/carbonSentence",
  authenticateUser as unknown as express.RequestHandler,
  carbonReduction as unknown as express.RequestHandler
);

toolRouter.get(
  "/wasteSentence",
  authenticateUser as unknown as express.RequestHandler,
  wasteAndRecycling as unknown as express.RequestHandler
);

toolRouter.get(
  "/waterSentence",
  authenticateUser as unknown as express.RequestHandler,
  waterManagement as unknown as express.RequestHandler
);

toolRouter.get(
  "/genderSentence",
  authenticateUser as unknown as express.RequestHandler,
  sentenceGender as unknown as express.RequestHandler
);

toolRouter.get(
  "/supplyChain",
  authenticateUser as unknown as express.RequestHandler,
  supplyChain as unknown as express.RequestHandler
);

toolRouter.get(
  "/renewablesSentence",
  authenticateUser as unknown as express.RequestHandler,
  renewables as unknown as express.RequestHandler
);

toolRouter.get(
  "/allSentence",
  authenticateUser as unknown as express.RequestHandler,
  allSentence as unknown as express.RequestHandler
);

toolRouter.get(
  "/companyUniverse",
  authenticateUser as unknown as express.RequestHandler,
  companyUniverse as unknown as express.RequestHandler
);

toolRouter.post(
  "/search",
  authenticateUser as unknown as express.RequestHandler,
  saveSearch as unknown as express.RequestHandler
);

toolRouter.get(
  "/filters",
  authenticateUser as unknown as express.RequestHandler,
  getFiltersByTableName as unknown as express.RequestHandler
);

export default toolRouter;

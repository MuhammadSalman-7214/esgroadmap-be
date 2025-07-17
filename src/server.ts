import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import prepareV1Routes from './apiVersion/v1/index.js';
import {PrismaClient} from './generated/prisma/index.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import {sendEmail} from './utils/email.js';
import { runDailyReportJob } from './utils/dailyReportJob.js';
import cron from "node-cron";
cron.schedule("59 23 * * *", runDailyReportJob);

export const prisma = new PrismaClient();

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());

const allowedorigins = [
  'https://esgroadmap-frontend.vercel.app',
  'https://esgroadmap-fe-seven.vercel.app',
  'http://localhost:5173',
];
app.use(
  cors({
    origin: allowedorigins,
    methods: 'GET,PUT,POST,DELETE,PATCH',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  })
);
prepareV1Routes(app);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

export default app;

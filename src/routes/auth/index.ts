import {Request, Response, NextFunction} from 'express';
import express from 'express';
import authenticateUser from '../../middleware/authenticateUser.js';
import {findUser, regenerateToken, signin, signup} from '../../controller/auth/index.js';

const authRouter = express.Router();

authRouter.post('/signup', signup);
authRouter.post('/signin', signin);
authRouter.post('/findUser', findUser);
authRouter.post(
  '/regenerateToken',
  regenerateToken as unknown as express.RequestHandler
);

export default authRouter;

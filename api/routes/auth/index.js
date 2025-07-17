import express from 'express';
import { findUser, regenerateToken, signin, signup } from '../../controller/auth/index.js';
const authRouter = express.Router();
authRouter.post('/signup', signup);
authRouter.post('/signin', signin);
authRouter.post('/findUser', findUser);
authRouter.post('/regenerateToken', regenerateToken);
export default authRouter;

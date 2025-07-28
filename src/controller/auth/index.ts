import {Request, Response} from 'express';
import {
  signinSchema,
  signupSchema,
} from '../../validation/schema/auth/index.js';
import validateRequest from '../../utils/validateRequest.js';
import {prisma} from '../../server.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import {AuthenticatedRequest} from '../../types/request.js';
import {
  generateAccessToken,
  generateRefreshToken,
  setAuthCookies,
} from '../../utils/token.js';
import {comparePasswords, hashPassword} from '../../utils/password.js';
import {emailContent} from '../../utils/emailContent.js';
import { sendEmail } from '../../utils/email.js';

dotenv.config();
const access = process.env.ACCESS_TOKEN_SECRET;
const refresh = process.env.REFRESH_TOKEN_SECRET;

type Object = Record<string, any>;

export const signup = async (req: Request, res: Response): Promise<void> => {
  let response: {
    status?: number;
    message?: string | Object | Array<Object>;
  } = {};
  try {
    await validateRequest(signupSchema, req.body);
    const {username, email, password, customerId, planId, planName, subscriptionId, isPaid} = req.body;

    const findByName = await prisma.user.findFirst({
      where:{
        username: username,
      }
    });

    if (findByName){
      res.status(400).json({message: "User name already in use"})
      return;
    }

    const userEmail = await prisma.user.findFirst({
      where: {email: email},
    });

    if (userEmail) {
      res.status(400).json({message: "User already exist"});
      return;
    }

    const hashedPassword = await hashPassword(password);
    await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        isActive: false,
        emailUpdate: `${Date.now()}`,
        customerId,
        isPaid,
        planId,
        planName,
        subscriptionId,
      },
    });
    await sendEmail(email , "Account activation mail:" , emailContent(username) )

    response.status = 200;
    response.message = {
      Message: 'Signup successful, Check your email account activation',
    };
    return;
  } catch (err: any) {
    response.status = 400;
    response.message = err.message;
  }
  res.status(response.status).json(response.message);
};

export const signin = async (req: Request, res: Response): Promise<void> => {
  let response: {
    status?: number;
    message?: string | Object | Array<Object>;
  } = {};
  try {
    await validateRequest(signinSchema, req.body);
    const {identifier , password} = req.body as {
      identifier: string,
      password: string,
    };
    const isEmail = identifier.includes("@");
    const user = await prisma.user.findFirst({
      where: {
        OR: [
          isEmail  ? { email:    identifier } :
          !isEmail ? { username: identifier } : undefined,
        ].filter(Boolean) as any,
      },
    });
    if (!user) {
      res.status(400).json({message: "User not exist"});
      return;
    }
    const isMatch = await comparePasswords(password, user.password);
    if (!isMatch) {
      res.status(400).json({message: "Password not mached"});
    }
    const accessToken = generateAccessToken(user.id);
    const refreshToken = generateRefreshToken(user.id);
    setAuthCookies(res, accessToken, refreshToken);
    response.status = 200;
    response.message = {
      id: user.id,
      username: user.username,
      email: user.email,
      isActive: user.isActive,
      profileImage: user.profileImage,
      plan: user.plan,
      role: user.role,
      customerId: user.customerId,
      planId: user.planId,
      planName: user.planName,
      stripeId: user.stripeId,
      subscriptionid: user.subscriptionId,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      deletedAt: user.deletedAt,
      isPaid: user.isPaid
    };
  } catch (err: any) {
    response.status = 400;
    response.message = err.message;
  }
  res.status(response.status).json(response.message);
};

export const findUser = async (req:Request , res:Response):Promise<void> => {
  let response:{
    status?: number;
    message?: string | Object | Array<object>;
  }={};
  try{
    const {email} = req.body
    const findUser = await prisma.user.findFirst({
      where:{
        email: email,
      }
    })
    if(findUser){
      response.status = 200;
      response.message = {message: true};
    }else{
      response.status = 200;
      response.message = {message: false}
    }
  }catch(err: any){
    response.status = 400;
    response.message = "Failed to find user"
  }
    res.status(response.status).json(response.message);
};

export const regenerateToken = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  const { accessToken, refreshToken } = req.cookies;
  if (!refreshToken) {
    res.status(400).json({ message: 'Refresh token is missing' });
    return;
  }
  try {
    jwt.verify(accessToken, access as string);
    res.status(200).json({ message: 'Access token is still valid' });
    return;
  } catch (accessErr: any) {
    try {
      const decodedRefresh = jwt.verify(refreshToken, refresh as string) as any;
      const newAccessToken = generateAccessToken(decodedRefresh.id);
      const newRefreshToken = generateRefreshToken(decodedRefresh.id);
      setAuthCookies(res, newAccessToken, newRefreshToken);
      res.status(200).json({ message: 'Access and Refresh tokens are re-generated' });
      return;
    } catch (refreshErr: any) {
      res.status(401).json({ message: 'Refresh token is invalid or expired' });
      return;
    }
    }
    
  };



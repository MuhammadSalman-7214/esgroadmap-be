import { Response } from "express";
import { AuthenticatedRequest } from "../../types/request.js";
import validateRequest from "../../utils/validateRequest.js";
import { editProfileSchema } from "../../validation/schema/user/index.js";
import { prisma } from "../../server.js";
import { comparePasswords, hashPassword } from "../../utils/password.js";
import { deleteOtp, getOtp, saveOtp, verifiedUser } from "../../utils/otp.js";
import { sendEmail } from "../../utils/email.js";

export const editProfile = async (req: AuthenticatedRequest, res: Response) => {
  const { id } = req.user;
  let response: {
    status?: number;
    message?: string | Object | Array<Object>;
  } = {};
  try {
    await validateRequest(editProfileSchema, req.body);
    const { username, email } = req.body;
    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        username,
        email,
      },
    });
    response.status = 200;
    response.message = user;
  } catch (err: any) {
    response.status = 400;
    response.message = err.message;
  }
  res.status(response.status).json(response.message);
};

export const activate = async (req: AuthenticatedRequest, res: Response) => {
  const { id } = req.user;
  let response: {
    status?: number;
    message?: string | Object | Array<Object>;
  } = {};
  try {
    await prisma.user.update({ where: { id: id }, data: { isActive: true } });
    response.status = 200;
    response.message = "Success";
  } catch (err: any) {
    response.status = 400;
    response.message = err.message;
  }
  res.status(response.status).json(response.message);
};

export const editPassword = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  const { oldPassword, newPassword } = req.body;
  const { id } = req.user;
  let response: {
    status?: number;
    message?: string | Object | Array<Object>;
  } = {};
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    if (!user) {
      throw { message: "User not found" };
    }
    const isMatch = await comparePasswords(oldPassword, user.password);
    if (!isMatch) {
      throw { message: "Old password is incorrect" };
    }

    const hashedPassword = await hashPassword(newPassword);
    await prisma.user.update({
      where: {
        id,
      },
      data: {
        password: hashedPassword,
      },
    });
    response.status = 200;
    response.message = "Password changed";
  } catch (err: any) {
    response.status = 400;
    response.message = err.message;
  }
  res.status(response.status).json(response.message);
};

export const updateUser = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  let response: {
    status?: number;
    message?: Object | string | Array<object>;
  } = {};
  try {
    const { planId, planName, customerId, isPaid } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        id: req.user.id,
      },
    });
    if (!user) {
      res.status(400).json({ message: "User not exist" });
    }
    await prisma.user.update({
      where: {
        id: req.user.id,
      },
      data: {
        planId,
        planName,
        customerId,
        isPaid,
      },
    });
    response.status = 200;
    response.message = "User updated";
  } catch (err: any) {
    response.status = 400;
    response.message = "user not updated";
  }
  res.status(response.status).json(response.message);
};

export const generateOtp = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  let response: {
    status?: number;
    message?: string | Object | Array<Object>;
  } = {};

  try {
    const { email } = req.body;
    const user = await prisma.user.findFirst({
      where: { email },
    });
    if (!user) {
      throw { message: `User with this email is not registered` };
    }
    const otp = Math.floor(Math.random() * (9999 - 1111) + 1000).toString();
    const expiresIn = new Date(Date.now() + 5 * 60 * 1000);

    saveOtp(email, otp, expiresIn);
    const subject = "Password Reset Request — Your One-Time Password (OTP)";
    const content = `
  <div style="font-family: Arial, sans-serif; line-height: 1; color: #000000;">
    <p>Dear! ${user.username},</p>
    <p>We received a request to reset the password for your account. To proceed, please use the One-Time Password (OTP) below:</p>
    <p style="font-size: 20px; font-weight: bold; color: #000;">Your OTP code: <b>${otp}</b></p>
    <p>This code will expire in <strong>5 minute</strong>.</p>
    <p>If you did not request a password reset, please ignore this email. For your account’s security, do not share this code with anyone.</p>
    <p>Thank you,<br />
    <strong>Team ESGRoadmap</strong></p>
  </div>
`;
    await sendEmail(email, subject, content);
    response.status = 200;
    response.message = {
      Message: "OTP sended to your mail and it will expire in 1 minut",
    };
  } catch (err: any) {
    response.status = 400;
    response.message = err.message;
  }
  res.status(response.status).json(response.message);
};

export const verifyOtp = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  let response: {
    status?: number;
    message?: string | object | Array<object>;
  } = {};

  try {
    const { email, otp } = req.body;
    const stored = getOtp(email);
    if (!stored) {
      throw new Error("OTP expired or not found");
    }
    if (stored.otp !== otp) {
      throw new Error("Invalid OTP");
    }
    deleteOtp(email);

    verifiedUser.set(email, true);
    response.status = 200;
    response.message = "OTP verified successfully";
  } catch (err: any) {
    response.status = 400;
    response.message = err.message;
  }

  res.status(response.status!).json(response.message);
};

export const forgotPassword = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  const { email, newPassword } = req.body;
  let response: {
    status?: number;
    message?: string | object | Array<object>;
  } = {};
  try {
    if (!verifiedUser.get(email)) {
      throw { message: "Otp not verified" };
    }
    const user = await prisma.user.findFirst({
      where: { email },
    });
    if (!user) {
      throw new Error("User not found");
    }
    const hashedPassword = await hashPassword(newPassword);
    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashedPassword },
    });
    response.status = 200;
    response.message = "Password changed";
  } catch (err: any) {
    response.status = 400;
    response.message = err.message;
  }
  res.status(response.status).json(response.message);
};

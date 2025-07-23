import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const accessSecret = process.env.ACCESS_TOKEN_SECRET;
const refreshSecret = process.env.REFRESH_TOKEN_SECRET;
export const generateAccessToken = (userId) => {
    return jwt.sign({ id: userId }, accessSecret, { expiresIn: '10m' });
};
export const generateRefreshToken = (userId) => {
    return jwt.sign({ id: userId }, refreshSecret, { expiresIn: '12h' });
};
export const setAuthCookies = (res, accessToken, refreshToken) => {
    res.cookie('accessToken', accessToken, {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
        maxAge: 10 * 60 * 1000,
    });
    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
        maxAge: 12 * 60 * 60 * 1000,
    });
};

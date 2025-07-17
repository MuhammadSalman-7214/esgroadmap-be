import axios from 'axios';
import path from 'path';
import fs from 'fs/promises';
const API_KEY = process.env.BREVO_API_KEY;
const BREVO_EMAIL = process.env.BREVO_EMAIL;
const EMAIL_FROM_NAME = process.env.EMAIL_FROM_NAME;
export const sendEmail = async (recipient, subject, htmlContent, attachmentPath // optional
) => {
    try {
        let attachmentData = [];
        if (attachmentPath) {
            const fileBuffer = await fs.readFile(attachmentPath);
            const base64Content = fileBuffer.toString('base64');
            attachmentData.push({
                name: path.basename(attachmentPath),
                content: base64Content,
            });
        }
        const response = await axios.post('https://api.brevo.com/v3/smtp/email', {
            sender: { name: EMAIL_FROM_NAME, email: BREVO_EMAIL },
            to: [{ email: recipient }],
            subject,
            htmlContent,
            attachment: attachmentData.length > 0 ? attachmentData : undefined,
        }, {
            headers: {
                'api-key': API_KEY,
                'Content-Type': 'application/json',
            },
        });
    }
    catch (error) {
        throw new Error('Email sending failed');
    }
};

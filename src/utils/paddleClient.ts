import axios from "axios";

export const paddle = axios.create({
    baseURL: `${process.env.PADDLE_BASE_URL}`,
    headers: {
        authorization: `Bearer ${process.env.PADDLE_API_KEY}`,
        'Content-Type' : 'application/json'
    }
})
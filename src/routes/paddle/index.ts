import express from 'express';
import { products, subscription } from '../../controller/payment/index.js';
import authenticateUser from '../../middleware/authenticateUser.js';
const paymentRouter = express.Router();

paymentRouter.get('/products', products);
paymentRouter.get('/subscriptions',
    authenticateUser as unknown as express.RequestHandler,
    subscription as unknown as express.RequestHandler);

export default paymentRouter;
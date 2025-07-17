import express from 'express';
import { products, subscription } from '../../controller/payment/index.js';
import authenticateUser from '../../middleware/authenticateUser.js';
const paymentRouter = express.Router();
paymentRouter.get('/products', products);
paymentRouter.get('/subscriptions', authenticateUser, subscription);
export default paymentRouter;

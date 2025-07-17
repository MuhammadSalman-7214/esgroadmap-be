import { paddle } from '../../utils/paddleClient.js';
import { prisma } from '../../server.js';
export const products = async (req, res) => {
    try {
        const response = await paddle.get('/products');
        const prices = await paddle.get('/prices');
        res.status(200).json({ product: response.data, prices: prices.data });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to fetch products', error: error.message });
    }
};
export const subscription = async (req, res) => {
    try {
        const id = req.user.id;
        const user = await prisma.user.findUnique({
            where: { id },
        });
        const customerId = user?.customerId;
        if (!customerId) {
            return res.status(400).json({ message: 'Customer ID is missing' });
        }
        const response = await paddle.get('/subscriptions');
        const allSubscriptions = response.data.data;
        const userSubscriptions = allSubscriptions.filter((sub) => sub.customer_id === customerId);
        res.status(200).json({ subscription: userSubscriptions });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to fetch subscriptions', error: error.message });
    }
};

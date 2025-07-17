// Inside src/index.ts or your routes file
import { Request, Response } from 'express';
import { paddle } from '../../utils/paddleClient.js';
import { AuthenticatedRequest } from '../../types/request.js';
import { prisma } from '../../server.js';

interface PaddleSubscription {
  id: string;
  customer_id: string;
  status: string;
  // ...other fields you need
}

interface PaddleResponse {
  data: PaddleSubscription[];
}

export const products = async (req: Request, res: Response) => {
  try {
    const response = await paddle.get('/products');
    const prices = await paddle.get('/prices');

    res.status(200).json({product: response.data , prices: prices.data});
  } catch (error: any) {
    res.status(500).json({ message: 'Failed to fetch products', error: error.message });
  }
}

export const subscription = async (req: AuthenticatedRequest, res: Response) => {

  try {
    const id = req.user.id;
    const user = await prisma.user.findUnique({
      where: { id },
    });
    const customerId = user?.customerId;
    if (!customerId) {
      return res.status(400).json({ message: 'Customer ID is missing' });
    }
    const response = await paddle.get<PaddleResponse>('/subscriptions');
    const allSubscriptions = response.data.data as any[];
    const userSubscriptions = allSubscriptions.filter(
      (sub) => sub.customer_id === customerId
    );
    res.status(200).json({subscription: userSubscriptions});
  } catch (error: any) {
    res.status(500).json({ message: 'Failed to fetch subscriptions', error: error.message });
  }
};




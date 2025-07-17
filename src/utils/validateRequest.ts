import {Schema} from 'joi';
import {Request} from 'express';

const validateRequest = async (
  schema: Schema,
  requestBody: Request['body']
): Promise<void> => {
  try {
    await schema.validateAsync(requestBody);
  } catch (err: any) {
    throw err;
  }
};

export default validateRequest;

import Joi from 'joi';
import {errors} from '../../message/index.js';

export const signupSchema = Joi.object({
  username: Joi.string().required().messages(errors.auth.signup.username),
  email: Joi.string().required().messages(errors.auth.signup.email),
  password: Joi.string().required().messages(errors.auth.signup.password),
  customerId: Joi.string().optional(),
  planId: Joi.string().optional(),
  planName: Joi.string().optional(),
  subscriptionId: Joi.string().optional(),
  isPaid: Joi.boolean().optional(),
}).required();

export const signinSchema = Joi.object({
  identifier: Joi.string().messages(errors.auth.signin.identifier),
  password: Joi.string().required().messages(errors.auth.signin.password),
});

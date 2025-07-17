import { signupSchema } from '../auth/index.js';
export const editProfileSchema = signupSchema
    .fork(['password'], (schema) => schema.forbidden())
    .required();

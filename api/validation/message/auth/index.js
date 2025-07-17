import { requiredString } from '../../../utils/validation.js';
export const auth = {
    signup: {
        username: requiredString('username'),
        email: requiredString('email'),
        password: requiredString('password'),
    },
    signin: {
        identifier: requiredString('identifier'),
        password: requiredString('password'),
    },
};

import authRouter from '../../routes/auth/index.js';
import userRouter from '../../routes/user/index.js';
import toolRouter from '../../routes/tool/index.js';
import paymentRouter from '../../routes/paddle/index.js';
const prepareV1Routes = (app) => {
    const prefix = '/api/v1/';
    app.use(`${prefix}auth`, authRouter);
    app.use(`${prefix}user`, userRouter);
    app.use(`${prefix}tool`, toolRouter);
    app.use(`${prefix}subscription`, paymentRouter);
};
export default prepareV1Routes;

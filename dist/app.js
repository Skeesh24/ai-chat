import cookieParser from 'cookie-parser';
import { config } from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import appRouter from './routes/index.js';
config();
const app = express();
// ====== middlewares ======
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
// TODO: remove in production
app.use(morgan('dev'));
app.use('/api/v1', appRouter);
export default app;
//# sourceMappingURL=app.js.map
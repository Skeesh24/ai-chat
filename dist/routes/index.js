import { Router } from 'express';
import chatRouter from './chat.js';
import userRouter from './user.js';
const appRouter = Router();
appRouter.use('/users', userRouter);
appRouter.use('/chats', chatRouter);
export default appRouter;
//# sourceMappingURL=index.js.map
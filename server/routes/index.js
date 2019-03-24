import { Router } from 'express';
import postRouter from './postroutes';
import userRouter from './userRoutes';

const router = new Router();

router.use('/posts', postRouter);
router.use('/user', userRouter);

export default router;

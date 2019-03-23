import { Router } from 'express';
import postRouter from './postroutes';

const router = new Router();

router.use('/posts', postRouter);

export default router;

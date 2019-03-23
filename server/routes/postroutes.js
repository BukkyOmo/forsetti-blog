import { Router } from 'express';
import { PostController } from '../controllers';
import { idValidator, tryCatch } from '../middlewares';

const { deletePost } = PostController;
const postRouter = new Router();

postRouter.delete('/:id', idValidator, tryCatch(deletePost));

export default postRouter;

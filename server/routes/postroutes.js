import { Router } from 'express';
import { PostController } from '../controllers';
import { idValidator, tryCatch } from '../middlewares';

const { deletePost, getAllPost } = PostController;
const postRouter = new Router();

postRouter.delete('/:id', idValidator, tryCatch(deletePost));
postRouter.get('/', tryCatch(getAllPost));

export default postRouter;

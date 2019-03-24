import { Router } from 'express';
import { PostController } from '../controllers';
import { idValidator, tryCatch, postValidator } from '../middlewares';

const { deletePost, editPost } = PostController;
const postRouter = new Router();

postRouter.delete('/:id', idValidator, tryCatch(deletePost));
postRouter.patch('/:id', [idValidator, postValidator], tryCatch(editPost));

export default postRouter;

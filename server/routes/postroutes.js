import { Router } from 'express';
import { PostController } from '../controllers';
import { idValidator, createPostValidator } from '../middlewares';
import { tryCatch } from '../helpers';

const { deletePost, createPost } = PostController;
const postRouter = new Router();

postRouter.delete('/:id', idValidator, tryCatch(deletePost));

postRouter.post('', createPostValidator, tryCatch(createPost));

export default postRouter;

import { Router } from 'express';
import PostController from '../controllers';
import idValidator from '../middlewares';

const { deletePost } = PostController;
const postRouter = new Router();

postRouter.delete('/:id', idValidator, deletePost);

export default postRouter;

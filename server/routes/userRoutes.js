import { Router } from 'express';
import { UserController } from '../controllers';
import { tryCatch, userValidator } from '../middlewares';

const { createUser } = UserController;

const routes = new Router();

routes.post('/create', userValidator, tryCatch(createUser));

export default routes;

import { Router } from 'express';
import { UserController } from '../controllers';
import { userValidator } from '../middlewares';
import { tryCatch } from '../helpers';

const { createUser } = UserController;

const routes = new Router();

routes.post('/create', userValidator, tryCatch(createUser));

export default routes;

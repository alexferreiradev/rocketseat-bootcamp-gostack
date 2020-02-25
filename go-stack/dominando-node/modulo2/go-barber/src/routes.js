import {Router} from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMid from './app/middlewares/auth';
import config from './version';

const routes = new Router();

routes.get('/', (_, res) => {
    return res.json({ status: "ok", version: config.version});
});
routes.post('/login', SessionController.login);

routes.use(authMid);

routes.post('/user', UserController.store);
routes.post('/user', UserController.update);

export default routes;
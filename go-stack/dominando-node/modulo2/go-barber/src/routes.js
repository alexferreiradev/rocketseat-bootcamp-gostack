import {Router} from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMid from './app/middlewares/auth';
import config from './version';

const routes = new Router();
const store = UserController.store.bind(UserController);
const update = UserController.update.bind(UserController);

routes.get('/', (_, res) => {
    return res.json({ status: "ok", version: config.version});
});
routes.post('/login', SessionController.login);

routes.use(authMid);

routes.post('/user', store);
routes.put('/user', update);

export default routes;
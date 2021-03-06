import {Router} from 'express';

import UserController from './app/controllers/UserController';
import DestinatarioController from './app/controllers/DestinatarioController';
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

routes.get('/recipient', DestinatarioController.index);
routes.post('/recipient', DestinatarioController.store);
routes.put('/recipient/:id', DestinatarioController.update);

export default routes;
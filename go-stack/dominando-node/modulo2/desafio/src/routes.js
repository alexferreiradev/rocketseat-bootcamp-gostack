import {Router} from 'express';

import UserController from './app/controllers/UserController';
import DestinatarioController from './app/controllers/DestinatarioController';
import config from './version';

const routes = new Router();

routes.get('/', (_, res) => {
    return res.json({ status: "ok", version: config.version});
});

routes.post('/users', UserController.store);

routes.post('/recipents', DestinatarioController.store);
routes.put('/recipents/{id}', DestinatarioController.update);

export default routes;
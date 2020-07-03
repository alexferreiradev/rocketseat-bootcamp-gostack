import {Router} from 'express';

import UserController from './app/controllers/UserController';
import DestinatarioController from './app/controllers/DestinatarioController';
import SessionController from './app/controllers/SessionController';
import EntregadorController from './app/controllers/EntregadorController';
import EncomendaController from './app/controllers/EncomendaController';
import authMid from './app/middlewares/auth';
import config from './version';

const routes = new Router();

routes.get('/', (_, res) => {
    return res.json({ status: "ok", version: config.version});
});
routes.post('/login', SessionController.login);

routes.use(authMid);

routes.post('/user', UserController.store);

routes.get('/destinatarios', DestinatarioController.index);
routes.post('/recipient', DestinatarioController.store);
routes.put('/recipient/:id', DestinatarioController.update);

routes.get('/entregadores', EntregadorController.index);
routes.post('/entregador', EntregadorController.store);
routes.put('/entregador/:id', EntregadorController.update);
routes.delete('/entregador/:id', EntregadorController.delete);
routes.delete('/entregador/:id/entregas', EntregadorController.entregas);

routes.get('/encomendas', EncomendaController.index);
routes.post('/encomenda', EncomendaController.store);
routes.put('/encomenda/:id', EncomendaController.update);
routes.delete('/encomenda/:id', EncomendaController.delete);

export default routes;
import {Router} from 'express';

import UserController from './app/controllers/UserController';
import DestinatarioController from './app/controllers/DestinatarioController';
import SessionController from './app/controllers/SessionController';
import EntregadorController from './app/controllers/EntregadorController';
import EncomendaController from './app/controllers/EncomendaController';
import ProblemaEncomendaController from './app/controllers/ProblemaEncomendaController';
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
routes.post('/destinatarios', DestinatarioController.store);
routes.put('/destinatarios/:id', DestinatarioController.update);

routes.get('/entregadores', EntregadorController.index);
routes.post('/entregadores', EntregadorController.store);
routes.put('/entregadores/:id', EntregadorController.update);
routes.delete('/entregadores/:id', EntregadorController.delete);
routes.delete('/entregadores/:id/entregas', EntregadorController.entregas);

routes.get('/encomendas', EncomendaController.index);
routes.get('/encomenda/:id/problemas', ProblemaEncomendaController.problemaListByEncomenda);
routes.post('/encomenda', EncomendaController.store);
routes.put('/encomenda/:id', EncomendaController.update);
routes.delete('/encomenda/:id', EncomendaController.delete);

export default routes;
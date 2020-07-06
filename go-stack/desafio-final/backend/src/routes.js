import { Router } from 'express';
import multer from 'multer';

import UserController from './app/controllers/UserController';
import FileController from './app/controllers/FileController';
import DestinatarioController from './app/controllers/DestinatarioController';
import SessionController from './app/controllers/SessionController';
import EntregadorController from './app/controllers/EntregadorController';
import EntregaController from './app/controllers/EntregaController';
import RetiradaController from './app/controllers/RetiradaController';
import EncomendaController from './app/controllers/EncomendaController';
import ProblemaEncomendaController from './app/controllers/ProblemaEncomendaController';
import authMid from './app/middlewares/auth';
import config from './version';
import multerConfig from './config/multer';

console.log('Iniciando configuracao de rotas');

const routes = new Router();
const upload = multer(multerConfig);

routes.get('/', (_, res) => {
  return res.json({ status: 'ok', version: config.version });
});
routes.post('/login', SessionController.login);
routes.post('/login_entregador', SessionController.loginEntregador);

routes.use(authMid);

routes.post('/user', UserController.store);

routes.get('/destinatarios', DestinatarioController.index);
routes.post('/destinatarios', DestinatarioController.store);
routes.put('/destinatarios/:id', DestinatarioController.update);

routes.get('/entregadores', EntregadorController.index);
routes.post('/entregadores', EntregadorController.store);
routes.put('/entregadores/:id', EntregadorController.update);
routes.delete('/entregadores/:id', EntregadorController.delete);

routes.get('/entregas', EntregaController.index);
routes.post('/entregas', EntregaController.store);

routes.post('/file', upload.single('file'), FileController.store);
routes.get('/file', FileController.index);
routes.get('/file/:id', FileController.filter);

routes.get('/encomendas', EncomendaController.index);
routes.post('/encomenda', EncomendaController.store);
routes.put('/encomenda/:id', EncomendaController.update);
routes.delete('/encomenda/:id', EncomendaController.delete);

routes.get(
  '/encomenda_problemas',
  ProblemaEncomendaController.problemaListByEncomenda
);
routes.post('/encomenda_problemas', ProblemaEncomendaController.store);
routes.post('/encomenda_problemas/:id', ProblemaEncomendaController.cancelar);

routes.post('/retirada/', RetiradaController.store);

console.log('Rotas configuradas:', routes);

export default routes;

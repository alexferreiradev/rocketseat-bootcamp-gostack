import {Router} from 'express';
import multer from 'multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import SchedullerController from './app/controllers/SchedullerController';
import NotificationController from './app/controllers/NotificationController';
import AvailableController from './app/controllers/AvailableController';
import authMid from './app/middlewares/auth';
import config from './version';
import multerConfig from './config/multer';

const routes = new Router();
const store = UserController.store.bind(UserController);
const update = UserController.update.bind(UserController);
const upload = multer(multerConfig);

routes.get('/', (_, res) => {
    return res.json({ status: "ok", version: config.version});
});
routes.post('/sessions', SessionController.store);
routes.post('/users', store);

//Rotas autenticadas
routes.use(authMid);

routes.get('/users', UserController.index);
routes.put('/users', update);

routes.get('/scheduler', SchedullerController.index);
routes.get('/notifications', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);

routes.post('/files', upload.single('file'), FileController.store);
routes.get('/files', FileController.index);

// Para Mobile
routes.get('/appointments', AppointmentController.index);
routes.post('/appointments', AppointmentController.store);
routes.delete('/appointments/:id', AppointmentController.delete);

routes.get('/providers', ProviderController.index);
routes.get('/providers/:providerId/availablity', AvailableController.index);
// Fim Mobile

export default routes;
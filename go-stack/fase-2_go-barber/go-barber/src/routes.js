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

routes.use(authMid);

routes.get('/users', UserController.index);
routes.put('/users', update);

routes.get('/provider', ProviderController.index);
routes.get('/provider/:providerId/availablity', AvailableController.index);

routes.get('/appointment', AppointmentController.index);
routes.post('/appointment', AppointmentController.store);
routes.delete('/appointment/:id', AppointmentController.delete);

routes.get('/scheduler', SchedullerController.index);
routes.get('/notification', NotificationController.index);
routes.put('/notification/:id', NotificationController.update);

routes.post('/file', upload.single('file'), FileController.store);
routes.get('/file', FileController.index);

export default routes;
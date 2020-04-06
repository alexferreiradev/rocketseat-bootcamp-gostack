import {Router} from 'express';
import multer from 'multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
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
routes.post('/login', SessionController.login);

routes.use(authMid);

routes.get('/user', UserController.index);
routes.post('/user', store);
routes.put('/user', update);

routes.get('/provider', ProviderController.index);

routes.post('/file', upload.single('file'), FileController.store);
//routes.get('/file', FileController.find);

export default routes;
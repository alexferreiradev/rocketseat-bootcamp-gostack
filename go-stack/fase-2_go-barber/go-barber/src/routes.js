import {Router} from 'express';
import multer from 'multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
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

routes.post('/user', store);
routes.put('/user', update);

routes.post('/files', upload.single('file'), (req, res) => {
    return res.json({ ok: true});
});

export default routes;
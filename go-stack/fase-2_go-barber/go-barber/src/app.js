import 'dotenv/config';

import express from 'express';
import path from 'path';
import Youch from 'youch';
import * as Sentry from '@sentry/node';

import 'express-async-errors';
import routes from './routes';
import configSentry from './config/sentry';

import './database';

class App {

    constructor() {
        this.server = express();
        Sentry.init(configSentry);

        this.midlewares();
        this.routes();
        this.exceptionHandler();
    }

    midlewares() {
        this.server.use(Sentry.Handlers.requestHandler());
        this.server.use(express.json());
        this.server.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')));
    }

    routes() {
        this.server.use(routes);
        this.server.use(Sentry.Handlers.errorHandler());
    }

    exceptionHandler() {
        this.server.use(async (error, req, res, next) => {
            const errors = await new Youch(error, req).toJSON();

            return res.status(500).json(errors);
        });
    }
}

export default new App().server;
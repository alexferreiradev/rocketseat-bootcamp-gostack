import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import User from '../app/models/User';
import File from '../app/models/File';
import Appointment from '../app/models/Appointment';
import databaseConfig from '../config/database';

const models = [ User, File, Appointment ];
class DataBase {
    constructor() {
        this.initPostgres();
        this.initMongo();
    }

    initPostgres() {
        this.connection = new Sequelize(databaseConfig);
        models
        .map(model => model.init(this.connection))
        .map(model => model.associate && model.associate(this.connection.models));
    }

    initMongo() {
        this.mongoConnection = mongoose.connect(
            process.env.MONGO_URL,
            {
                useNewUrlParser: true, useFindAndModify: true
            },
        );
    }
}

export default new DataBase();
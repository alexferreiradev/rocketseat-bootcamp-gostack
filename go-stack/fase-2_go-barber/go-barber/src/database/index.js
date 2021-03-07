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
        console.log("Conectando sequilize como " + process.env.NODE_ENV);
        if (process.env.DATABASE_URL) {
            this.connection = new Sequelize(process.env.DATABASE_URL+'?sslmode=required', {
                dialectOptions: {
                    ssl: {
                        rejectUnauthorized: false
                    }
                }
            });
        } else {
            console.log("conectando sequilize como dev");
            this.connection = new Sequelize(databaseConfig[process.env.NODE_ENV]);
        }

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
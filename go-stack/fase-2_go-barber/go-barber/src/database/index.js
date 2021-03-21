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

    async initPostgres() {
        console.log("Conectando sequilize como " + process.env.NODE_ENV);
        try {
            if (process.env.DATABASE_URL) {
                this.connection = new Sequelize(process.env.DATABASE_URL+'?sslmode=no-verify', {
                    dialect: 'postgres',
                    dialectOptions: {
                        ssl: {
                            rejectUnauthorized: false
                        }
                    },
                    define: {
                        timestamp: true,
                        underscored: true,
                        underscoredAll: true,
                    }
                });
            } else {
                console.log("conectando sequilize como dev");
                this.connection = new Sequelize(databaseConfig[process.env.NODE_ENV]);
            }
            await this.connection.authenticate();
        } catch(e) {
            console.log("Erro do autenticate", e);
            return ;
        }

        console.log("Conexao finalizada com sequelize e postgres");

        models
        .map(model => model.init(this.connection))
        .map(model => model.associate && model.associate(this.connection.models));
        console.log("Models configurados");
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
import Sequelize from 'sequelize';

import User from '../app/models/User';
import Destinatario from '../app/models/Destinatario';
import Entregador from '../app/models/Entregador';
import databaseConfig from '../config/database';

const models = [ User, Destinatario, Entregador];
class DataBase {
    constructor() {
        this.initPostgres();
    }

    initPostgres() {
        this.connection = new Sequelize(databaseConfig);
        models
        .map(model => model.init(this.connection))
        .map(model => model.associate && model.associate(this.connection.models));
    }
}

export default new DataBase();
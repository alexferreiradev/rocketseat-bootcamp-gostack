import Sequelize from 'sequelize';

import User from '../app/models/User';
import File from '../app/models/File';
import Destinatario from '../app/models/Destinatario';
import Encomenda from '../app/models/Encomenda';
import ProblemaEncomenda from '../app/models/ProblemaEncomenda';
import databaseConfig from '../config/database';

const models = [User, File, Destinatario, Encomenda, ProblemaEncomenda];
class DataBase {
  constructor() {
    this.initPostgres();
  }

  initPostgres() {
    this.connection = new Sequelize(databaseConfig);
    console.log('Sequelize ORM inicializando models: ', models);
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
    console.log('Sequelize ORM inicializado com postgres');
  }
}

export default new DataBase();

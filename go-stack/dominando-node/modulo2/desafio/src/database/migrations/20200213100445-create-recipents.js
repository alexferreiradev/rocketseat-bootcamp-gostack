'use strict';

const destinatarioTableName = 'recipients';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(destinatarioTableName, 
    { id: Sequelize.BIGINT,
      nome: Sequelize.STRING, 
      rua: Sequelize.STRING,
      numero: Sequelize.STRING,
      complemento: Sequelize.STRING,
      estado: Sequelize.STRING(2),
      cidade: Sequelize.STRING,
      cep: Sequelize.STRING(8),
      created_at: {
        type: Sequelize.STRING,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(destinatarioTableName);
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('entregador', {
        id: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          autoIncrement: true
        },
        avatar_id: {
          type: Sequelize.BIGINT,
          allowNull: false,
          unique: true
        },
        nome: Sequelize.STRING,
        email: Sequelize.STRING,
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
    return queryInterface.dropTable('entregador');
  }
};

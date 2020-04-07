'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('file', {
        id: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          autoIncrement: true
        },
        name: Sequelize.STRING,
        path: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false
        }
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('file');
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user', {
        id: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          autoIncrement: true
        },
        name: Sequelize.STRING,
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        password_hash: {
          type: Sequelize.STRING,
          allowNull: false
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
    return queryInterface.dropTable('user');
  }
};

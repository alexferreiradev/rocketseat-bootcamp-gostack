'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
        id: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          autoIncrement: true
        },
        name: Sequelize.STRING,
        email: {
          type: Sequelize.STRING,
          allowNull: false,

        },
        password_hash: {
          type: Sequelize.STRING,
          allowNull: false
        },
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
    return queryInterface.dropTable('users');
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('encomenda', {
        id: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          autoIncrement: true
        },
        recipient_id: {
          type: Sequelize.BIGINT,
          allowNull: false,
          unique: true
        },
        deliveryman_id: {
          type: Sequelize.BIGINT,
          allowNull: false,
          unique: true
        },
        signature_id: {
          type: Sequelize.BIGINT,
          allowNull: false,
          unique: true
        },
        product: Sequelize.STRING,
        canceled_at: {
          type: Sequelize.DATE,
          allowNull: true
        },
        start_date: {
          type: Sequelize.DATE,
          allowNull: true
        },
        end_date: {
          type: Sequelize.DATE,
          allowNull: true
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
    return queryInterface.dropTable('encomenda');
  }
};

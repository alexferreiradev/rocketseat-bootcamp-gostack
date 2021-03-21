'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('user_go-barber','provider',{
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('user_go-barber', 'provider');
  }
};

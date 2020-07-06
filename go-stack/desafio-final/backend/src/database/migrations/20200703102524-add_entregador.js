'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('user','entregador',{
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    });
} ,

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('user', 'entregador');
  }
};

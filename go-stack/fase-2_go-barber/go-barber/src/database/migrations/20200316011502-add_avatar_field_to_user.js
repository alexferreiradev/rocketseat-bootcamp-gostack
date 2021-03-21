'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('user_go-barber','avatar_id',{
        type: Sequelize.BIGINT,
        references: { model: 'file', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('user_go-barber', 'avatar_id');
  }
};

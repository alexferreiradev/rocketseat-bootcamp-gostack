module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('problema_encomenda', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      descricao: Sequelize.STRING,
      encomenda_id: {
        type: Sequelize.BIGINT,
        references: { model: 'encomenda', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
      },
      entregador_id: {
        type: Sequelize.BIGINT,
        references: { model: 'user', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('problema_encomenda');
  },
};

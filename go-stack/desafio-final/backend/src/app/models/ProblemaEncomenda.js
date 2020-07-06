import Sequelize, { Model } from 'sequelize';

class ProblemaEncomenda extends Model {
  static init(sequelize) {
    super.init(
      {
        encomenda_id: Sequelize.BIGINT,
        descricao: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'problema_encomenda',
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Encomenda, {
      foreignKey: 'encomenda_id',
      as: 'encomenda',
    });
    this.belongsTo(models.User, {
      foreignKey: 'entregador_id',
      as: 'entregador',
    });
  }
}

export default ProblemaEncomenda;

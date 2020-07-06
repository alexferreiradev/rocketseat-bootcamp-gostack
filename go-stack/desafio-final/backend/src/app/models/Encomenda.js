import Sequelize, { Model } from 'sequelize';

class Encomenda extends Model {
  static init(sequelize) {
    super.init(
      {
        produto: Sequelize.STRING,
        canceled_at: Sequelize.DATE,
        start_date: Sequelize.DATE,
        end_date: Sequelize.DATE,
      },
      {
        sequelize,
        tableName: 'encomenda',
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'deliveryman_id',
      as: 'entregador',
    });

    this.belongsTo(models.Destinatario, {
      foreignKey: 'recipient_id',
      as: 'destinatario',
    });

    this.belongsTo(models.File, {
      foreignKey: 'signature_id',
      as: 'signature',
    });
  }
}

export default Encomenda;

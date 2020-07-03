import Sequelize, {Model} from 'sequelize';

class Encomenda extends Model {
    static init(sequelize) {
        super.init({
            produto: Sequelize.STRING,
            canceled_at: Sequelize.DATE,
            start_date: Sequelize.DATE,
            end_date: Sequelize.DATE
      }, {
          sequelize,
          tableName: "recipient"
      })
    }

    static associate(models) {
        this.belongsTo(models.Entregador, {
            foreignKey: 'deliveryman_id', as: 'entregador'
        });
        
        this.belongsTo(models.Destinatario, {
            foreignKey: 'recipient_id', as: 'destinatario'
        });
        
        this.belongsTo(models.File, {
            foreignKey: 'signature_id', as: 'signature'
        });
        
        this.belongsTo(models.File, {
            foreignKey: 'avatar_id', as: 'avatar'
        });
    }
}

export default Encomenda;
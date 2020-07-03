import Sequelize, {Model} from 'sequelize';

class Entregador extends Model {
    static init(sequelize) {
        super.init({
            // avatar_id (foto do entregador);
            nome: Sequelize.STRING,
            email: Sequelize.STRING(2),
            cep: Sequelize.STRING(8)
      }, {
          sequelize,
          tableName: "recipient"
      })
    }

    static associate(models) {
        this.belongsTo(models.File, {
            foreignKey: 'avatar_id', as: 'avatar'
        });
    }
}

export default Entregador;
import Sequelize, {Model} from 'sequelize';

class Destinatario extends Model {
    static init(sequelize) {
        super.init({
            nome: Sequelize.STRING, 
            rua: Sequelize.STRING,
            numero: Sequelize.STRING,
            complemento: Sequelize.STRING,
            estado: Sequelize.STRING(2),
            cidade: Sequelize.STRING,
            cep: Sequelize.STRING(8)
      }, {
          sequelize,
          tableName: "recipient"
      })
    }
}

export default Destinatario;
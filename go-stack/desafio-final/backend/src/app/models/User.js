import Sequelize, {Model} from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
    static init(sequelize){
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                password: Sequelize.VIRTUAL,
                password_hash: Sequelize.STRING,
                entregador: Sequelize.BOOLEAN,
            }, 
            {
                sequelize,
                tableName: "user"
            }
        );

        this.addHook('beforeSave', async (user) => {
            if (user.password){
                user.password_hash = await bcrypt.hash(user.password, 8);
            }
        });

        return this;
    }    

    async checkPassword(pass) {
        return bcrypt.compare(pass, this.password_hash);
    }

    static associate(models) {
        
        this.belongsTo(models.Destinatario, {
            foreignKey: 'recipient_id', as: 'destinatario'
        });
        
        this.belongsTo(models.File, {
            foreignKey: 'signature_id', as: 'signature'
        });
    }
}

export default User;
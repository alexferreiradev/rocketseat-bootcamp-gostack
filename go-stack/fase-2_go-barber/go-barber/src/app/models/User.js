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
                provider: Sequelize.BOOLEAN,
            }, 
            {
                sequelize,
                tableName: "user_go-barber"
            }
        );

        this.addHook('beforeSave', async (user) => {
            if (user.password){
                user.password_hash = await bcrypt.hash(user.password, 8);
            }
        });

        return this;
    }    

    static associate(models) {
        this.belongsTo(models.File, {
            foreignKey: 'avatar_id', as: 'avatar'
        });
    }

    async checkPassword(pass) {
        return bcrypt.compare(pass, this.password_hash);
    }
}

export default User;
import Sequelize, {Model} from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
    static init(sequelize){
        super.init(
            {
                name: Sequelize.STRING,
                email: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                password: Sequelize.VIRTUAL,
                password_hash: Sequelize.STRING,
            }, 
            {
                sequelize
            }
        );

        this.addHook('beforeSave', async (user) => {
            if (user.password){
                user.password_hash = await bcrypt.hash(user.password, 8);
            }
            console.log(user);
        });

        return this;
    }    
}

export default User;
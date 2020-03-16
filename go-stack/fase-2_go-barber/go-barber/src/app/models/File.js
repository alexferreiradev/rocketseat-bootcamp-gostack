import Sequelize, {Model} from 'sequelize';

class File extends Model {
    static init(sequelize){
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                password: Sequelize.VIRTUAL,
                password_hash: Sequelize.STRING,
            }, 
            {
                sequelize,
                tableName: "user"
            }
        );

        return this;
    }    
}

export default File;
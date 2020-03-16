import Sequelize, {Model} from 'sequelize';

class File extends Model {
    static init(sequelize){
        super.init(
            {
                name: Sequelize.STRING,
                path: Sequelize.STRING,
            }, 
            {
                sequelize,
                tableName: "file"
            }
        );

        return this;
    }    
}

export default File;
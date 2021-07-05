import Sequelize, { Model } from 'sequelize';

class File extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://${process.env.APP_URL}/files/${this.path}`;
          },
        },
      },
      {
        sequelize,
        tableName: 'file',
      }
    );

    return this;
  }
}

export default File;

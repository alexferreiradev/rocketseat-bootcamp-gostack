import File from '../models/File';

class FileController {
  async index(req, res) {
    const fileList = await File.findAll();
    return res.json(fileList);
  }

  async store(req, res) {
    const { originalname: name, filename: path } = req.file;

    const file = await File.create({
      name,
      path,
    });

    return res.json(file);
  }

  async filter(req, res) {
    if (!req.params.id) {
      return res.status(422).json('Necessário passar id');
    }

    const model = await File.findByPk(req.params.id);
    return res.json(model);
  }
}

export default new FileController();

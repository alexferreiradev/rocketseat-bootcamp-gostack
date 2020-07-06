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
}

export default new FileController();

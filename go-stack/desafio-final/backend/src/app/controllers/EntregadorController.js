import User from '../models/User';
import File from '../models/File';

class EntregadorController {
  async index(req, res) {
    const dataList = await User.findAndCountAll({
      where: { entregador: true },
      attributes: ['id', 'name', 'email', 'avatar_id'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    return res.json(dataList);
  }

  async find(req, res) {
    const { id } = req.params;
    if (!id) {
      return res.status(422).json({ error: 'Necessario passar id' });
    }
    const model = await User.findByPk(id);
    if (!model) {
      return res.status(404).json([]);
    }

    return res.json(model);
  }

  async store(req, res) {
    if (req.body.id) {
      return res
        .code(422)
        .json({ error: 'Utilize update para alterar um model' });
    }
    const userById = await User.findByPk(req.userId);

    const { email } = req.body;
    if (email) {
      const userByEmail = await User.findOne({ where: { email } });
      if (userByEmail && userByEmail.id !== userById.id) {
        return res
          .status(400)
          .json({ error: `Já existe usuário com este email: ${email}` });
      }
    }

    const entregador = {
      ...req.body,
      entregador: true,
    };
    const model = await User.create(entregador);

    return res.status(201).json({ model });
  }

  async update(req, res) {
    const id = parseInt(req.params.id, 10);
    let model = await User.findByPk(id);
    if (!model) {
      return res.json({ error: `User nao encontrado com ${id}` });
    }

    model = await model.update(req.body);

    return res.json({ model });
  }

  async delete(req, res) {
    const id = parseInt(req.params.id, 10);
    let model = await User.findByPk(id);
    if (!model) {
      return res.json({ error: `User nao encontrado com ${id}` });
    }

    model = await model.destroy();

    return res.json({ model });
  }
}

export default new EntregadorController();

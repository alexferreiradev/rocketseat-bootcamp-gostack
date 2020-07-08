import Sequelize from 'sequelize';
import Destinatario from '../models/Destinatario';

const { Op } = Sequelize;

async function findWithFilter(req, res) {
  const { q } = req.query;
  const model = await Destinatario.findAndCountAll({
    where: {
      nome: {
        [Op.iLike]: `%${q}%`,
      },
    },
  });

  return res.json(model);
}
class DestinatarioController {
  async index(req, res) {
    const { q } = req.query;
    if (q) {
      return findWithFilter(req, res);
    }

    const model = await Destinatario.findAndCountAll();

    return res.json(model);
  }

  async find(req, res) {
    const { id } = req.params;
    if (!id) {
      return res.status(422).json({ error: 'Necessario passar id' });
    }
    const model = await Destinatario.findByPk(id);
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

    const destinatario = await Destinatario.create(req.body);

    return res.status(201).json({ destinatario });
  }

  async update(req, res) {
    const id = parseInt(req.params.id, 10);
    let model = await Destinatario.findByPk(id);
    if (!model) {
      return res.json({ error: `Destinatario nao encontrado com ${id}` });
    }

    model = await model.update(req.body);

    return res.json({ model });
  }

  async delete(req, res) {
    const id = parseInt(req.params.id, 10);
    let model = await Destinatario.findByPk(id);
    if (!model) {
      return res.json({ error: `Destinatario nao encontrado com ${id}` });
    }

    model = await model.destroy();

    return res.json({ model });
  }
}

export default new DestinatarioController();

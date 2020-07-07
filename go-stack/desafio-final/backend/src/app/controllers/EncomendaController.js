import Sequelize from 'sequelize';
import Encomenda from '../models/Encomenda';
import Queue from '../../lib/Queue';
import NovaEncomendaMail from '../jobs/NovaEncomendaMail';

const { Op } = Sequelize;

async function sendEmailToEntregador(encomenda, entregador) {
  await Queue.addJob(NovaEncomendaMail.key, {
    nomeProduto: encomenda.produto,
    entregador: entregador.nome,
  });
}

async function findWithFilter(req, res) {
  const { q } = req.query;
  const model = await Encomenda.findAndCountAll({
    where: {
      product: {
        [Op.iLike]: `%${q}%`,
      },
    },
  });

  return res.json(model);
}

class EncomendaController {
  async index(req, res) {
    const { q } = req.query;
    if (q) {
      return findWithFilter(req, res);
    }

    const model = await Encomenda.findAndCountAll();

    return res.json(model);
  }

  async find(req, res) {
    const { id } = req.params;
    if (!id) {
      return res
        .status(422)
        .json({ error: 'Necessario passar id da encomenda' });
    }
    const model = await Encomenda.findByPk(id);
    if (!model) {
      return res.status(404).json([]);
    }

    return res.json(model);
  }

  async store(req, res) {
    if (req.body.id) {
      return res
        .status(422)
        .json({ error: 'Utilize update para alterar um model' });
    }

    const model = await Encomenda.create(req.body);

    sendEmailToEntregador(model, model.entregador);

    return res.status(201).json({ model });
  }

  async update(req, res) {
    const id = parseInt(req.params.id, 10);
    let model = await Encomenda.findByPk(id);
    if (!model) {
      return res.json({ error: `Encomenda nao encontrado com ${id}` });
    }

    model = await model.update(req.body);

    return res.json({ model });
  }

  async delete(req, res) {
    const { id } = req.params;
    let model = await Encomenda.findByPk(id);
    if (!model) {
      return res.json({ error: `Encomenda nao encontrado com ${id}` });
    }

    model = await model.destroy();

    return res.json({ model });
  }

  async filtradoPorEntregador(req, res) {
    const { id } = req.params;
    if (id) {
      return res
        .status(422)
        .json({ error: 'Necessario passar id do entregador' });
    }
    const model = await Encomenda.findAndCountAll({
      where: {
        entregador: {
          [Op.eq]: id,
        },
      },
    });

    return res.json(model);
  }
}

export default new EncomendaController();

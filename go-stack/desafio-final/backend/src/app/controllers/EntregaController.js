import Sequelize from 'sequelize';
import Encomenda from '../models/Encomenda';

const { Op } = Sequelize;

class EntregaController {
  async index(_, res) {
    const model = await Encomenda.findAndCountAll({
      where: {
        end_date: {
          [Op.not]: null,
        },
      },
    });

    return res.json(model);
  }

  async filtradoPorEntregador(req, res) {
    const { id } = req.params;
    if (id) {
      return res
        .code(422)
        .json({ error: 'Necessario passar id do entregador' });
    }
    const model = await Encomenda.findAndCountAll({
      where: {
        end_date: {
          [Op.not]: null,
        },
        entregador: {
          [Op.eq]: id,
        },
      },
    });

    return res.json(model);
  }
}

export default new EntregaController();

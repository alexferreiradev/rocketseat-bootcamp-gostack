import Sequelize from 'sequelize';
import Encomenda from '../models/Encomenda';
import File from '../models/File';
import User from '../models/User';

const { Op } = Sequelize;

class EntregaController {
  async index(_, res) {
    const model = await Encomenda.findAndCountAll({
      where: {
        end_date: {
          [Op.ne]: null,
        },
      },
    });

    return res.json(model);
  }

  async store(req, res) {
    if (req.body.id) {
      return res
        .status(422)
        .json({ error: 'Utilize update para alterar um model' });
    }
    const { idEncomenda } = req.body;
    if (!idEncomenda) {
      return res.status(422).json({ error: 'Precisa passar id da encomenda' });
    }

    const { userId } = req;
    if (!userId) {
      return res
        .status(401)
        .json({ error: 'API disponivel somente para usuarios cadastrados' });
    }
    const { signature_id } = req.body;
    if (!signature_id) {
      return res.status(422).json({
        error: 'Precisa passar arquivo da assinatura do destinatario',
      });
    }

    const encomenda = await Encomenda.findByPk(idEncomenda);
    if (!encomenda) {
      return res.status(404).json({ error: 'Encomenda nao encontrada' });
    }

    const user = await User.findByPk(userId);
    if (!user || !user.entregador) {
      return res.status(422).json({
        error: 'Entregador nao encontrada ou usuário não é entregador',
      });
    }

    const assinatura = await File.findByPk(signature_id);
    if (!assinatura) {
      return res
        .status(404)
        .json({ error: 'Arquivo de assinatura nao encontrado' });
    }

    const newFields = {
      end_date: new Date(),
      signature_id: assinatura.id,
    };
    const model = await encomenda.update(newFields);

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
        end_date: {
          [Op.ne]: null,
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

import Sequelize from 'sequelize';
import Encomenda from '../models/Encomenda';
import File from '../models/File';

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

  async store(req, res) {
    if (req.body.id) {
      return res
        .code(422)
        .json({ error: 'Utilize update para alterar um model' });
    }
    const { idEncomenda } = req.body;
    if (!idEncomenda) {
      return res.code(422).json({ error: 'Precisa passar id da encomenda' });
    }
    const { idSignature } = req.body;
    if (!idSignature) {
      return res.code(422).json({
        error: 'Precisa passar arquivo da assinatura do destinatario',
      });
    }

    const encomenda = await Encomenda.findByPk(idEncomenda);
    if (!encomenda) {
      return res.code(404).json({ error: 'Encomenda nao encontrada' });
    }

    const assinatura = await File.findByPk(idSignature);
    if (!assinatura) {
      return res
        .code(404)
        .json({ error: 'Arquivo de assinatura nao encontrado' });
    }

    encomenda.end_date = new Date();
    encomenda.signature_id = assinatura.id;
    const model = await encomenda.update();

    return res.json({ model });
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

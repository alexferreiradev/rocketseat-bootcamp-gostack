import ProblemaEncomenda from '../models/ProblemaEncomenda';
import Encomenda from '../models/Encomenda';
import User from '../models/User';
import Queue from '../../lib/Queue';
import CancelationMail from '../jobs/CancelationMail';
import format from '../../util/index';

async function sendEmailToEntregador(encomenda, entregador) {
  await Queue.addJob(CancelationMail.key, {
    nomeProduto: encomenda.produto,
    dataCancelamento: format(encomenda.canceled_at),
    entregador: entregador.nome,
  });
}

class ProblemaEncomendaController {
  async index(_, res) {
    const model = await ProblemaEncomenda.findAndCountAll();

    return res.json(model);
  }

  async problemaById(req, res) {
    const { id } = req.params;
    if (!id) {
      return res
        .status(422)
        .json({ error: 'Necessario passar id do problema' });
    }

    const problema = await ProblemaEncomenda.findByPk(id);
    if (!problema) {
      return res.status(404).json({ error: 'Problema nao encontrada' });
    }

    return res.json(problema);
  }

  async problemaListByEncomenda(req, res) {
    const { encomendaId } = req.query;
    if (!encomendaId) {
      return res
        .status(422)
        .json({ error: 'Necessario passar id para listagem de problemas' });
    }

    const encomenda = await Encomenda.findByPk(encomendaId);
    if (!encomenda) {
      return res.status(404).json({ error: 'Encomenda nao encontrada' });
    }

    const model = await ProblemaEncomenda.findAndCountAll({
      where: {
        encomenda_id: encomendaId,
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
        .json({ error: 'Api deve ser utilizada por usuarios cadastrados' });
    }

    const { descricao } = req.body;
    if (!descricao) {
      return res
        .status(400)
        .json({ error: 'Precisa passar descricao do problema' });
    }

    const encomenda = await Encomenda.findByPk(idEncomenda);
    if (!encomenda) {
      return res.status(404).json({ error: 'Encomenda nao encontrada' });
    }

    const entregador = await User.findByPk(userId);
    if (!entregador) {
      return res.status(404).json({ error: 'Entregador nao encontrado' });
    }

    const model = await ProblemaEncomenda.create({
      descricao,
      encomenda_id: idEncomenda,
      entregador_id: userId,
    });

    return res.json({ model });
  }

  async cancelar(req, res) {
    const { id } = req.params;
    if (!id) {
      return res.status(422).json({ error: 'Precisa passar id do problema' });
    }

    const problema = await ProblemaEncomenda.findByPk(id);
    if (!problema) {
      return res.status(404).json({ error: 'Problema nao encontrada' });
    }

    const encomenda = await Encomenda.findByPk(problema.encomenda_id);
    if (!encomenda) {
      return res.status(404).json({ error: 'Encomenda nao encontrada' });
    }

    const newFields = { canceled_at: new Date() };
    const model = await encomenda.update(newFields);

    sendEmailToEntregador(model, model.entregador);

    return res.json({ model });
  }

  async update(req, res) {
    const id = parseInt(req.params.id, 10);
    let model = await ProblemaEncomenda.findByPk(id);
    if (!model) {
      return res.json({ error: `ProblemaEncomenda nao encontrado com ${id}` });
    }

    model = await model.update(req.body);

    return res.json({ model });
  }

  async delete(req, res) {
    const id = parseInt(req.params.id, 10);
    let model = await ProblemaEncomenda.findByPk(id);
    if (!model) {
      return res.json({ error: `ProblemaEncomenda nao encontrado com ${id}` });
    }

    model = await model.delete();

    return res.json({ model });
  }
}

export default new ProblemaEncomendaController();

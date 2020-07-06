import ProblemaEncomenda from '../models/ProblemaEncomenda';
import Encomenda from '../models/Encomenda';
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

  async problemaListByEncomenda(req, res) {
    const { encomendaId } = req.query;
    if (encomendaId) {
      return res
        .code(422)
        .json({ error: 'Necessario passar id para listagem de problemas' });
    }

    const model = await ProblemaEncomenda.findAndCountAll({
      where: {
        encomenda: encomendaId,
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

    const encomenda = await Encomenda.findByPk(idEncomenda);
    if (!encomenda) {
      return res.code(404).json({ error: 'Encomenda nao encontrada' });
    }

    const model = await ProblemaEncomenda.create(req.body);

    return res.json({ model });
  }

  async cancelar(req, res) {
    const { idEncomenda } = req.body;
    if (!idEncomenda) {
      return res.code(422).json({ error: 'Precisa passar id da encomenda' });
    }
    const { id } = req.params;
    if (id) {
      return res
        .code(422)
        .json({ error: 'Utilize update para alterar um model' });
    }

    const encomenda = await Encomenda.findByPk(idEncomenda);
    if (!encomenda) {
      return res.code(404).json({ error: 'Encomenda nao encontrada' });
    }

    encomenda.canceled_at = new Date();
    const model = await encomenda.update();

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

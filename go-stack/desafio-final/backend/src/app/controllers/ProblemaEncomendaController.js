import ProblemaEncomenda from '../models/ProblemaEncomenda';

class ProblemaEncomendaController {
  async index(_, res) {
    const model = await ProblemaEncomenda.findAndCountAll();

    return res.json(model);
  }

  async problemaListByEncomenda(req, res) {
    const { id } = req.params;
    if (id) {
      return res
        .code(422)
        .json({ error: 'Necessario passar id para listagem de problemas' });
    }

    const model = await ProblemaEncomenda.findAndCountAll({
      where: {
        encomenda: id,
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

    const model = await ProblemaEncomenda.create(req.body);

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

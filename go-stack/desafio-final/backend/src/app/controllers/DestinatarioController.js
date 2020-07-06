import Destinatario from '../models/Destinatario';

class DestinatarioController {
  async index(_, res) {
    const model = await Destinatario.findAndCountAll();

    return res.json(model);
  }

  async store(req, res) {
    if (req.body.id) {
      return res
        .code(422)
        .json({ error: 'Utilize update para alterar um model' });
    }

    const destinatario = await Destinatario.create(req.body);

    return res.json({ destinatario });
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
}

export default new DestinatarioController();

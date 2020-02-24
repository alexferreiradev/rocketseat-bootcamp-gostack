import Destinatario from '../models/Destinatario';

class DestinatarioController {
    async store(req, res) {
        if (req.body.id) {
            return res.code(422).json({ error: "Utilize update para alterar um model"});
        }

        const destinatario = await Destinatario.create(req.body);

        return res.json({destinatario});
    }

    async update(req, res) {
        const id = req.param.id;
        var model = await Destinatario.findByPk(id);
        if (!model){
            return res.json({ error: `Destinatario nao encontrado com ${id}`});
        }

        model = await Destinatario.update(req.body);

        return res.json({model});
    }
}

export default new DestinatarioController();
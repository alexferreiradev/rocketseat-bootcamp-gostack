import Entregador from '../models/Entregador';

class EntregadorController {

    async index(_, res) {
        const model = await Entregador.findAndCountAll();
        
        return res.json(model);
    }

    async store(req, res) {
        if (req.body.id) {
            return res.code(422).json({ error: "Utilize update para alterar um model"});
        }

        const model = await Entregador.create(req.body);

        return res.json({model});
    }

    async update(req, res) {
        const id = parseInt(req.params.id);
        var model = await Entregador.findByPk(id);
        if (!model){
            return res.json({ error: `Entregador nao encontrado com ${id}`});
        }

        model = await model.update(req.body);

        return res.json({model});
    }

    async delete(req, res) {
        const id = parseInt(req.params.id);
        var model = await Entregador.findByPk(id);
        if (!model){
            return res.json({ error: `Entregador nao encontrado com ${id}`});
        }

        model = await model.delete();

        return res.json({model});
    }
    
    async entregas(req, res) {
        const id = parseInt(req.params.id);
        var model = await Entregador.findByPk(id);
        if (!model){
            return res.json({ error: `Entregador nao encontrado com ${id}`});
        }

        model = await model.entregas;

        return res.json({model});
    }
}

export default new EntregadorController();
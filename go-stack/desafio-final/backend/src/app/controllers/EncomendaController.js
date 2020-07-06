import Encomenda from '../models/Encomenda';

class EncomendaController {

    async index(_, res) {
        const model = await Encomenda.findAndCountAll();
        
        return res.json(model);
    }

    async store(req, res) {
        if (req.body.id) {
            return res.code(422).json({ error: "Utilize update para alterar um model"});
        }

        const model = await Encomenda.create(req.body);

        return res.json({model});
    }

    async update(req, res) {
        const id = parseInt(req.params.id);
        var model = await Encomenda.findByPk(id);
        if (!model){
            return res.json({ error: `Encomenda nao encontrado com ${id}`});
        }

        model = await model.update(req.body);

        return res.json({model});
    }

    async delete(req, res) {
        const id = parseInt(req.params.id);
        var model = await Encomenda.findByPk(id);
        if (!model){
            return res.json({ error: `Encomenda nao encontrado com ${id}`});
        }

        model = await model.delete();

        return res.json({model});
    }

    async filtradoPorEntregador(req, res) {
        const {id} = req.params;
        if (!!id){
            return res.code(422).json({ error: "Necessario passar id do entregador"});
        }
        const model = await Encomenda.findAndCountAll({where: {
          entregador: {
            [Op.eq]: id,
          }
        }});
        
        return res.json(model);
    }
}

export default new EncomendaController();
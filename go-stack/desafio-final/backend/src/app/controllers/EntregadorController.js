import User from "../models/User";
import File from "../models/File";

class EntregadorController {

    async index(req, res) {
        const dataList = await User.findAll({
            where: { provider: true},
            attributes: [ 'id', 'name', 'email', 'avatar_id',],
            include: [{
                model: File, 
                as: 'avatar',
                attributes: ['name', 'path', 'url'],
            }]
        });

        return res.json(dataList);
    }

    async store(req, res) {
        if (req.body.id) {
            return res.code(422).json({ error: "Utilize update para alterar um model"});
        }

        const model = await User.create(req.body);

        return res.json({model});
    }

    async update(req, res) {
        const id = parseInt(req.params.id);
        var model = await User.findByPk(id);
        if (!model){
            return res.json({ error: `User nao encontrado com ${id}`});
        }

        model = await model.update(req.body);

        return res.json({model});
    }

    async delete(req, res) {
        const id = parseInt(req.params.id);
        var model = await User.findByPk(id);
        if (!model){
            return res.json({ error: `User nao encontrado com ${id}`});
        }

        model = await model.delete();

        return res.json({model});
    }
}

export default new EntregadorController();
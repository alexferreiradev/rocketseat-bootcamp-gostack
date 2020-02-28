import User from '../models/User';

class UserController {

    async store(req, res) {
        if (this._checkUserExist(req, res)){
            return ;
        }

        const response = await User.create(req.body)
        return res.json(this._createModelDto(response));
    }

    async update(req, res) {
        var userById = await User.findByPk(req.userId);
        
        const { email, oldPassword, password } = req.body;
        if (email){
            const userByEmail = this._checkUserExist(req, res);
            if (userByEmail.id !== userById.id) {
                return res.status(400).json({ error: `Já existe usuário com este email: ${email}`});
            }
        }
        if (password){
            if (!oldPassword) {
                return res.status(401).json({ error: "Necessário informar senha antiga para alterar a senha"});
            } else if (!(await userById.checkPassword(oldPassword))){
                return res.status(401).json({ error: "Senha antiga incorreta"});
            }
        }

        userById = userById.update(req.body);
        return res.json(this._createModelDto(userById));
    }

    _createModelDto(response) {
        const {password, ...model} = user.dataValues;
        return model;
    }

    async _checkUserExist(req, res) {
        const { email } = req.body;
        const  user = await User.findOne({ where: { email }});
        if (user){
            res.status(422).json({error: `Usuário já existe com este email: ${email}`});
            return user;
        }

        return false;
    }
}

export default new UserController();
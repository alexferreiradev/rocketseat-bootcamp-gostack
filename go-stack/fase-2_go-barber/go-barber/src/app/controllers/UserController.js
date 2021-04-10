import User from '../models/User';
import File from '../models/File';
import { promisify } from "util";
import * as Yup from "yup";

class UserController {

    constructor() {
        console.log("Construido");
    }

    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);
    }

    async store(req, res) {
        const shema = Yup.object().shape({
            email: Yup.string().email().required(),
            name: Yup.string().required(),
            telefone: Yup.string().required(),
            password: Yup.string().required().min(6),
        });

        try {
            shema.validateSync(req.body, { abortEarly: false});
        } catch (error) {
            console.log(error);            
            return res.status(400).json({ error: "Requisição inválida", message: error.message, errors: error.errors});            
        }

        const user = await this._checkUserExist(req, res);
        if (user){
            res.status(422).json({error: `Usuário já existe com este email: ${email}`});
            return ;
        }
        const totalUsers = await User.findAll({where: {provider: true}});
        // São 10 provedores + 2 de testes (adm + teste).
        console.warn("Total de prestadores", totalUsers.length);
        if (totalUsers.length >= 12) {
            return res.status(422).json({error: `A versão atual permite somente até 10 provedores`});
        }

        const response = await User.create(req.body)
        return res.json(this._createModelDto(response));
    }

    async update(req, res) {
        const shema = Yup.object().shape({
            email: Yup.string().email(),
            name: Yup.string(),
            telefone: Yup.string(),
            password: Yup.string().min(6)
            .when('oldPassword', (oldPassword, field)=>
                oldPassword ? field.required() : field
            ),
            confirmPassword: Yup.string().
            when('password', (password, field) => {
                password ? field.required().oneOf([Yup.ref('password')]) : field
            }),
            oldPassword: Yup.string().min(6),
        });

        if (!(await shema.isValid(req.body))) {
            return res.status(400).json({ error: "Requisição inválida"});
        }

        var userById = await User.findByPk(req.userId);
        
        const { email, oldPassword, password } = req.body;
        if (email){
            const userByEmail = await this._checkUserExist(req, res);
            if (userByEmail && userByEmail.id !== userById.id) {
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

        userById = await userById.update(req.body);
        userById = await User.findByPk(req.userId, {
            include: [
                {
                    model: File,
                    as: 'avatar',
                    attributes: ['id','path', 'url'],
                }
            ]
        } );
        
        return res.json(this._createModelDto(userById));
    }

    _createModelDto(response) {
        const {password, ...model} = response.dataValues;
        return model;
    }

    async _checkUserExist(req, res) {
        const { email } = req.body;
        return await User.findOne({ where: { email }});
    }
}

export default new UserController();
import jwt from 'jsonwebtoken';
import * as Yup from "yup";
import User from '../models/User';
import authConfig from '../../config/auth';

class SessionController {

    async login(req, res) {
        const shema = Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().required(),
        });

        if (!(await shema.isValid(req.body))) {
            return res.status(400).json({ error: "Requisição inválida"});
        }

        const { email, password } = req.body;

        const user = await User.findOne({ where: { email }});
        if (!user) {
            return res.status(401).json({ error: "Usuario nao encontrado"});
        }

        if (!(await user.checkPassword(password))){
            return res.status(401).json({ error: "Senha incorreta"});
        }

        const { id, name } = user;

        const token = jwt.sign({ id, name }, authConfig.secret, {
            expiresIn: authConfig.expires
        });

        return res.json({
            user: {
                id,
                name,
                email
            },
            token
        });
    }
    
}

export default new SessionController();
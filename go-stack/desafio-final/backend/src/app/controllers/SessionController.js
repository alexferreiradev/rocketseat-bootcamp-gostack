import jwt from 'jsonwebtoken';
import User from '../models/User';
import authConfig from '../../config/auth';

class SessionController {
  async login(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Usuario nao encontrado' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Senha incorreta' });
    }

    const { id, name } = user;

    const token = jwt.sign({ id, name }, authConfig.secret, {
      expiresIn: authConfig.expires,
    });

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token,
    });
  }

  async loginEntregador(req, res) {
    const { id: idEntregador } = req.body;

    const user = await User.findOne({
      where: { id: idEntregador, entregador: true },
    });
    if (!user) {
      return res.status(401).json({ error: 'Usuario nao encontrado' });
    }

    const { id, name } = user;
    const token = jwt.sign({ id, name }, authConfig.secret, {
      expiresIn: authConfig.expires,
    });

    return res.json({
      user: {
        id,
        name,
      },
      token,
    });
  }
}

export default new SessionController();

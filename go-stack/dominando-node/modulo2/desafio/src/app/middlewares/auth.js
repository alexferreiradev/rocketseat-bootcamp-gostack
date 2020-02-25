import jwt from 'jsonwebtoken';
import {promisify} from 'util';
import authConfig from '../../config/auth';

export default async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({error: "Header authorization não encontrado"});
    }

    try {
        const [, token] = authHeader.split(' ');
        const verified  = await promisify(jwt.verify)(token, authConfig.secret);
        req.userId = verified.id;
        
        return next();
    } catch (err) {
        return res.status(401).json({error: "Token invalido: " + err});
    }
};
import jwt from 'jsonwebtoken';
import {promisify} from 'util';
import authConfig from '../../config/auth';

function skip(req) {
    const reqMath = /files\/*/g;
    const reqFound = req.path.match(reqMath);
    return reqFound && req.method == 'GET';
}

export default async (req, res, next) => {

    if (skip(req)) {
        return next();
    }

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
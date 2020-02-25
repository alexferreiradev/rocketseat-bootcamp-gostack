import User from '../models/User';

class UserController {

    async store(req, res) {
        const response = await User.create(req.body)
        const {password, ...model} = response.dataValues;
        
        return res.json(model);
    }
}

export default new UserController();
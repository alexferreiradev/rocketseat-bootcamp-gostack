import { parseISO, startOfDay, endOfDay } from "date-fns";
import { Op } from "sequelize";

import User from "../models/User";
import Appointment from "../models/Appointment";

class SchedullerController {
    
    async index(req, res) {
        const userIsProvider = await User.findOne({
            where: {id: req.userId, provider: true}
        });
        if (!userIsProvider){
            return res.status(401).json({error: "Agenda disponível somente para prestadores"});
        }

        const {date} = req.query;
        const parsedDate = parseISO(date);

        const appointmentList = await Appointment.findAll({
            where: {
                provider_id: req.userId,
                canceled_at: null,
                date: {
                    [Op.between]: [startOfDay(parsedDate), endOfDay(parsedDate)],
                },
            },
            order: ['date'],
        });

        return res.json(appointmentList);
    }
}

export default new SchedullerController();
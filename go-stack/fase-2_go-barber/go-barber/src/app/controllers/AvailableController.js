import User from "../models/User";
import Appointment from "../models/Appointment";
import { setSeconds, setMinutes, setHours, format, isAfter, startOfDay, endOfDay } from "date-fns";
import { Op } from "sequelize";
import { formatDate } from "./AppointmentController";

class AvailableController {
    async index(req, res) {
        const { date } = req.query;
        const {providerId} = req.params;
        if (!date || !providerId) {
            return res.status(400).json({error: "Data ou prestador não informado"});
        }
        const provider = await User.findOne({
            where: {id: providerId, provider: true}
        });
        if (!provider) {
            return res.status(404).json({error: "Prestador não encontrado"});
        }

        const searchDate = Number(date);
        const appointmentFound = await Appointment.findAll({
            where: {
                provider_id: providerId,
                canceled_at: null,
                date: {
                    [Op.between]: [startOfDay(searchDate), endOfDay(searchDate)],
                }
            }
        });

        const schedule = [
            '08:00',
            '09:00',
            '10:00',
            '11:00',
            '12:00',
            '14:00',
            '15:00',
            '16:00',
            '17:00',
            '18:00',
        ]

        const availableList = schedule.map(time => {
            const [hour, minute] = time.split(':');
            const value = setSeconds(
                setMinutes(setHours(searchDate, hour), minute)
                ,0
            );

            return {time, value: format(value, "yyyy-MM-dd'T'HH:mm:ssxxx"), 
            available: isAfter(value, new Date()) && !appointmentFound.find(a => {
                return format(a.date, 'HH:mm') === time;
            }),
        };
        });

        return res.json(availableList);
    }
}

export default new AvailableController();
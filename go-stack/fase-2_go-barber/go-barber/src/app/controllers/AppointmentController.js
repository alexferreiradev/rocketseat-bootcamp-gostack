import * as Yup from "yup";
import { parseISO, startOfHour, isBefore, format } from "date-fns";
import pt from "date-fns/locale/pt";
import Appointment from "../models/Appointment";
import User from "../models/User";
import File from "../models/File";
import Notification from "../schemas/Notification";

class AppointmentController {

    async index(req, res) {
        let { page=1 } = req.query;
        if (page <= 0 ) {
            page = 1;
        }
        const MAX_PAGE = 20;
        const offset = (page - 1) * MAX_PAGE;
        
        console.log(page, offset);

        const modelList = await Appointment.findAll({
            where: { user_id: req.userId, canceled_at: null},
            order: ['date'],
            limit: MAX_PAGE,
            offset,
            attributes: ['id', 'date'],
            include: [{
                    model: User,
                    as: 'provider',
                    attributes: ['id', 'name'],
                    include: [{
                            model: File,
                            as: 'avatar',
                            attributes: ['id','path', 'url'],
                        }
                    ],
                },
            ]
        });

        return res.json(modelList);
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            provider_id: Yup.number().required(),
            date: Yup.date().required(),
        });

        if (!schema.isValid()) {
            return res.status(400).json({error: "Erro de validação"});
        }

        const { provider_id, date } = req.body;
        const isProvider = await User.findOne({
            where: {
                id: provider_id,
                provider: true,
            },
        });

        if (!isProvider) {
            return res.status(401).json({error: "Somente um provedor pode criar um agendamento"});
        }

        const hourStart = startOfHour(parseISO(date));
        if (isBefore(hourStart, new Date())){
            return res.status(400).json({error: "Datas passadas não são permitidas"})
        }

        const appointmentBusy = await Appointment.findOne({
            where: {
                provider_id,
                canceled_at: null,
                date: hourStart,
            }
        });
        if (appointmentBusy) {
            console.log(hourStart);        
            console.log(appointmentBusy);        
            return res.status(400).json({error: "Já existe um agendamento para esta data."});
        }

        createNotification(req.userId, hourStart, provider_id);
     
        const appointment = await Appointment.create({
            user_id: req.userId,
            provider_id,
            date: hourStart,
        });        
        return res.json(appointment);
    }
}

async function createNotification(userId, hourStart, providerId) {
    const user = await User.findByPk(userId);
    const formattedDate = format(
        hourStart, 
        "'dia' dd 'de' MMMM', às' HH:mm'h'",
        {locale: pt},
    );
    await Notification.create({
        content: `Novo agendamento de ${user.name} para ${formattedDate}`,
        user: providerId,
    });
}

export default new AppointmentController();
import * as Yup from "yup";
import { parseISO, startOfHour, isBefore, format, subHours } from "date-fns";
import pt from "date-fns/locale/pt";
import Appointment from "../models/Appointment";
import User from "../models/User";
import File from "../models/File";
import Mail from "../../lib/Mail";
import Notification from "../schemas/Notification";
import Queue from "../../lib/Queue";
import CancelationMail from "../jobs/CancelationMail";

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

    async delete(req, res) {
        const appointment = await Appointment.findByPk(
            req.params.id,
            {
                include: [
                    {
                        model: User,
                        as: 'provider',
                        attributes: ['name', 'email'],
                    },
                    {
                        model: User,
                        as: 'user',
                        attributes: ['name'],
                    }
            ],
        }
        );
        if (!appointment) {
            return res.status(404).json({error: "Agendamento não encontrado"});
        }

        if (appointment.user_id !== req.userId) {
            return res.status(401).json({error: "Agendamento não pertence a este usuário"});
        }

        const maxDateToCancel = subHours(appointment.date, 2);
        if (isBefore(maxDateToCancel, new Date())) {
            return res.status(401).json({error: "O cancelamento pode ser feito somente até 2h antes"})
        }

        appointment.canceled_at = new Date();

        sendEmailToProvider(appointment);

        await appointment.save();

        return res.json(appointment);
    }
}

async function createNotification(userId, hourStart, providerId) {
    const user = await User.findByPk(userId);
    const formattedDate = formatDate(hourStart);
    await Notification.create({
        content: `Novo agendamento de ${user.name} para ${formattedDate}`,
        user: providerId,
    });
}

export function formatDate(date) {
    // TODO adicionar forma de testar se date é parsed ou nao
    
    // const parsedDate = parseISO(date);
    // console.log("Data que chegou: ", date, "=> ", parsedDate);
    return format(
        date, 
        "'dia' dd 'de' MMMM', às' HH:mm'h'",
        {locale: pt},
    );
}

async function sendEmailToProvider(appointment) {
    await Queue.addJob(CancelationMail.key, {
        appointment
    });
}

export default new AppointmentController();
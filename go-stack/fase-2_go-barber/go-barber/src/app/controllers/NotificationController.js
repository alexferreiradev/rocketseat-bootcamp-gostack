import Notification from "../schemas/Notification";
import User from "../models/User";

class NotificationController {
    
    async index(req, res) {
        const isProvider = await User.findOne({
            where: { id: req.userId, provider: true}
        });
        if (!isProvider) {
            return res.status(401).json({error: "Somente prestadores que podem ver ver notificacoes"});
        }

        const notificationList = await Notification.find({
            user: req.userId,
        })
        .sort({createdAt: 'desc'})
        .limit(20);

        return res.json(notificationList);
    }
}

export default new NotificationController();
import Sequelize from 'sequelize';
import { setHours, setMinutes, setSeconds, isAfter, isBefore } from 'date-fns';

import Encomenda from '../models/Encomenda';
import File from '../models/File';
import Destinatario from '../models/Destinatario';
import User from '../models/User';

const { Op } = Sequelize;

class RetiradaController {
  async index(req, res) {
    const model = await Encomenda.findAndCountAll({
      where: {
        start_date: {
          [Op.eq]: null,
        },
        end_date: {
          [Op.eq]: null,
        },
        canceled_at: {
          [Op.eq]: null,
        },
      },
      attributes: [
        'id',
        'product',
        'deliveryman_id',
        'recipient_id',
        'signature_id',
        'start_date',
        'end_date',
        'canceled_at',
      ],
      include: [
        {
          model: User,
          as: 'entregador',
          attributes: ['avatar_id', 'name'],
          include: [
            {
              model: File,
              as: 'avatar',
            },
          ],
        },
        {
          model: Destinatario,
          as: 'destinatario',
          attributes: [
            'nome',
            'rua',
            'numero',
            'cidade',
            'estado',
            'complemento',
            'cep',
          ],
        },
        {
          model: File,
          as: 'signature',
        },
      ],
    });

    return res.json(model);
  }

  async store(req, res) {
    const { idEncomenda } = req.body;
    if (!idEncomenda) {
      return res.status(422).json({ error: 'Precisa passar id da encomenda' });
    }

    const encomenda = await Encomenda.findByPk(idEncomenda);
    if (!encomenda) {
      return res.status(404).json({ error: 'Encomenda nao encontrada' });
    }

    const horaRetirada = new Date();
    const horaPermitidaStart = setHours(
      setMinutes(setSeconds(new Date(), 59), 59),
      7
    );
    const horaPermitidaEnd = setHours(
      setMinutes(setSeconds(new Date(), 59), 59),
      23
    );
    if (
      isBefore(horaRetirada, horaPermitidaStart) ||
      isAfter(horaRetirada, horaPermitidaEnd)
    ) {
      return res
        .status(422)
        .json({ error: 'Horário não permitido para retiradas' });
    }

    const newFields = { start_date: horaRetirada };
    const model = await encomenda.update(newFields);

    return res.json({ model });
  }
}

export default new RetiradaController();

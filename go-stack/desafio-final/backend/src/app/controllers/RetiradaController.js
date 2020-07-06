import Sequelize from 'sequelize';
import { setHours, setMinutes, setSeconds, isAfter, isBefore } from 'date-fns';

import Encomenda from '../models/Encomenda';
import File from '../models/File';

const { Op } = Sequelize;

class RetiradaController {
  async store(req, res) {
    const { idEncomenda } = req.body;
    if (!idEncomenda) {
      return res.code(422).json({ error: 'Precisa passar id da encomenda' });
    }

    const encomenda = await Encomenda.findByPk(idEncomenda);
    if (!encomenda) {
      return res.code(404).json({ error: 'Encomenda nao encontrada' });
    }

    const horaRetirada = new Date();
    const horaPermitidaStart = setHours(
      setMinutes(setSeconds(new Date(), 59), 59),
      7
    );
    const horaPermitidaEnd = setHours(
      setMinutes(setSeconds(new Date(), 59), 59),
      17
    );
    if (
      isBefore(horaRetirada, horaPermitidaStart) ||
      isAfter(horaRetirada, horaPermitidaEnd)
    ) {
      return res
        .code(422)
        .json({ error: 'Horário não permitido para retiradas' });
    }

    encomenda.start_date = horaRetirada;
    const model = await encomenda.update();

    return res.json({ model });
  }
}

export default new RetiradaController();

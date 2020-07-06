import { parseISO } from 'date-fns';
import Mail from '../../lib/Mail';
import formatDate from '../../util/index';

class CancelationMail {
  get key() {
    return 'CancelationMail';
  }

  async handle({ data }) {
    const { appointment } = data;

    console.log(`O job 'CancelationMail' iniciou a execução`);

    Mail.sendMail({
      to: `${appointment.provider.name} <${appointment.provider.email}>`,
      subject: `Cancelamento de agendamento`,
      template: 'cancelation',
      context: {
        provider: appointment.provider.name,
        user: appointment.user.name,
        date: formatDate(parseISO(appointment.date)),
      },
    });
  }
}

export default new CancelationMail();

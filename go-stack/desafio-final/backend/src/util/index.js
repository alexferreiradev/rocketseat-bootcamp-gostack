import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

export default function formatDate(date) {
  // TODO adicionar forma de testar se date é parsed ou nao

  // const parsedDate = parseISO(date);
  // console.log("Data que chegou: ", date, "=> ", parsedDate);
  return format(date, "'dia' dd 'de' MMMM', às' HH:mm'h'", { locale: pt });
}

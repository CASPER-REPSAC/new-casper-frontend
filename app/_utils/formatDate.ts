import { format } from 'date-fns';

export default function formateDate(isoDateTimeString: string) {
  const date = new Date(isoDateTimeString);
  return format(date, 'yy. MM. dd');
}

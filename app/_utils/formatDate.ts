export default function formateDate(isoDateTimeString: string) {
  const [date] = isoDateTimeString.split('T');
  const [year, month, day] = date.split('-');
  const formattedDate = `${year.slice(2)}. ${month}. ${day}`;

  return formattedDate;
}

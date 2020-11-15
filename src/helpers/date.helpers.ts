import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';

export const humanizeDate = (date: string) =>
  format(parseISO(date), 'MMM d, yyyy');

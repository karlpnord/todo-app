import { useMemo } from 'react';

export const useFormatDate = (date?: string | Date): string => {
  const formattedDate = useMemo(() => {
    if (!date) return '';

    const validDate = new Date(date);
    if (isNaN(validDate.getTime())) return '';

    return new Intl.DateTimeFormat('en-GB', { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'short' 
    }).format(validDate);
  }, [date]);

  return formattedDate;
};
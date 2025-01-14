import { useMemo } from 'react';

export const useFormatDate = (date?: string | Date): string => {
  const formattedDate = useMemo(() => {
    // If no date is provided, return an empty string
    if (!date) return '';

    const validDate = new Date(date);

    // If the resulting date is invalid, return an empty string
    if (isNaN(validDate.getTime())) return '';

    // Format the valid date using Intl.DateTimeFormat to display it in a custom format
    return new Intl.DateTimeFormat('en-GB', { 
      weekday: 'long',
      day: 'numeric',
      month: 'short'
    }).format(validDate);
  }, [date]); // The memoized value will update only when `date` changes

  return formattedDate;
};

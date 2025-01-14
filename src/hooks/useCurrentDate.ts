import { useState, useEffect } from 'react';

interface CurrentDate {
  date: string;
  time: string;
  weekday: string;
}

export const useCurrentDate = (): CurrentDate => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  // Set up an interval that updates the time every second (1000 milliseconds)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the interval when the component is unmounted or the effect is re-run
    return () => clearInterval(intervalId);
  }, []);

  // Extract the day, month, time, and weekday from the currentTime object
  const day = currentTime.getDate();
  const month = currentTime.toLocaleString('default', { month: 'short' });
  const time = currentTime.toLocaleTimeString();
  const weekday = currentTime.toLocaleString('default', { weekday: 'long' });

  // Format the date as f.ex. 14 Jan
  const date = `${day} ${month}`;

  return { date, time, weekday };
};

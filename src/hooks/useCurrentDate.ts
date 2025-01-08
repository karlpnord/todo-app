import { useState, useEffect } from 'react';

interface CurrentDate {
  date: string;
  time: string;
  weekday: string;
}

export const useCurrentDate = (): CurrentDate => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const day = currentTime.getDate();
  const month = currentTime.toLocaleString('default', { month: 'short' });
  const time = currentTime.toLocaleTimeString();
  const weekday = currentTime.toLocaleString('default', { weekday: 'long' });

  const date = `${day} ${month}`;

  return { date, time, weekday };
};

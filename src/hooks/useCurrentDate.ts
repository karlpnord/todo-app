import { useState, useEffect } from 'react';

interface CurrentDate {
  date: string;
  time: string;
  weekday: string;
}

export const useCurrentDate = (): CurrentDate => {
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());
  const [dateInfo] = useState<{ date: string; weekday: string }>(() => {
    const now = new Date();
    return {
      date: `${now.getDate()} ${now.toLocaleString('default', { month: 'short' })}`,
      weekday: now.toLocaleString('default', { weekday: 'long' })
    };
  });

  // Only update the time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return { ...dateInfo, time };
};

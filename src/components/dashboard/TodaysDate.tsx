import { memo, useMemo } from 'react';
import { useCurrentDate } from '../../hooks/useCurrentDate';
import { AiOutlineCalendar } from 'react-icons/ai';

const DateHeader = memo(() => (
  <h2 className='text-2xl font-bold mb-2'>Today's date</h2>
));

const CalendarIcon = memo(() => (
  <AiOutlineCalendar size={28} />
));

const TodaysDate = () => {
  const { date, time, weekday } = useCurrentDate();

  const staticContent = useMemo(() => (
    <div className='flex justify-between items-center'>
      <h3 className='text-gray-300 font-bold'>{weekday}</h3>
      <CalendarIcon />
    </div>
  ), [weekday]);

  return (
    <div>
      <DateHeader />
      <div className='flex flex-col justify-center bg-zinc-900 rounded-md p-4 h-40'>
        {staticContent}
        <h2 className='text-blue-400 font-bold text-5xl mb-2'>{date}</h2>
        <h3 className='text-gray-100 font-medium text-xl'>{time}</h3>
      </div>
    </div>
  );
};

export default memo(TodaysDate);
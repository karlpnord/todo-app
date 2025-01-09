import { useCurrentDate } from '../../hooks/useCurrentDate';
import { AiOutlineCalendar } from 'react-icons/ai';

const TodaysDate = () => {
  const { date, time, weekday } = useCurrentDate();

  return (
    <div>
      <h2 className='text-2xl font-bold mb-2'>Today's date</h2>
      <div className='flex flex-col justify-center bg-zinc-900 rounded-md p-4 h-40'>
        <div className='flex justify-between items-center'>
          <h3 className='text-gray-300 font-bold'>{weekday}</h3>
          <AiOutlineCalendar size={28} />
        </div>
        <h2 className='text-blue-400 font-bold text-5xl mb-2'>{date}</h2>
        <h3 className='text-gray-100 font-medium text-xl'>{time}</h3>
      </div>
    </div>
  );
};

export default TodaysDate;
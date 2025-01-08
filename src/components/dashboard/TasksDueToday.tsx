import { AiOutlineStar } from 'react-icons/ai';

const TasksDueToday = () => {
  return (
    <div>
      <h2 className='text-2xl font-bold mb-2'>Tasks due today</h2>
      <ul className='bg-zinc-900 p-4 overflow-y-scroll rounded-md h-40'>
        <li className='flex items-center gap-2 p-4 bg-zinc-800 mb-2 rounded-md'>
          <div className='border-2 border-gray-300 rounded-full w-4 h-4'></div>
          Task 1
          <AiOutlineStar size={20} className='text-gray-300 ml-auto hover:text-blue-400 transition' />
        </li>
        <li className='flex items-center gap-2 p-4 bg-zinc-800 mb-2 rounded-md'>
          <div className='border-2 border-gray-300 rounded-full w-4 h-4'></div>
          Task 2
          <AiOutlineStar size={20} className='text-gray-300 ml-auto hover:text-blue-400 transition' />
        </li>
        <li className='flex items-center gap-2 p-4 bg-zinc-800 mb-2 rounded-md'>
          <div className='border-2 border-gray-300 rounded-full w-4 h-4'></div>
          Task 3
          <AiOutlineStar size={20} className='text-gray-300 ml-auto hover:text-blue-400 transition' />
        </li>
        <li className='flex items-center gap-2 p-4 bg-zinc-800 mb-2 rounded-md'>
          <div className='border-2 border-gray-300 rounded-full w-4 h-4'></div>
          Task 4
          <AiOutlineStar size={20} className='text-gray-300 ml-auto hover:text-blue-400 transition' />
        </li>
        <li className='flex items-center gap-2 p-4 bg-zinc-800 mb-2 rounded-md'>
          <div className='border-2 border-gray-300 rounded-full w-4 h-4'></div>
          Task 5
          <AiOutlineStar size={20} className='text-gray-300 ml-auto hover:text-blue-400 transition' />
        </li>
      </ul>
    </div>
  );
};

export default TasksDueToday;
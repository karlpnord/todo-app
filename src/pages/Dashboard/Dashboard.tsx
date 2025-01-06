import { AiOutlineBarChart, AiOutlineEllipsis } from 'react-icons/ai';
import { motion } from 'motion/react';

import Stats from './Stats';

const Dashboard = () => {
  return (
    <motion.div
      className='flex flex-col gap-8'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className='flex items-center w-full gap-2'>
        <AiOutlineBarChart size={28} className='text-green-300' />
        <h1 className='text-2xl font-bold'>Dashboard</h1>
        <AiOutlineEllipsis size={28} className='w-fit ml-auto text-gray-100 p-[6px] rounded-md border border-zinc-700 hover:bg-zinc-700 transition active:scale-90' />
      </div>
      <div>
        <h2 className='text-2xl font-bold mb-2'>Stats</h2>
        <Stats />
      </div>
    </motion.div>
  );
};

export default Dashboard;
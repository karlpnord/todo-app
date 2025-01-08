import { AiOutlineBarChart, AiOutlineEllipsis } from 'react-icons/ai';
import { motion } from 'motion/react';

import Stats from '../components/dashboard/Stats';
import TodaysDate from '../components/dashboard/TodaysDate';
import TasksDueToday from '../components/dashboard/TasksDueToday';
import Progression from '../components/dashboard/Progression';
import DailyQuote from '../components/dashboard/DailyQuote';

import DashboardSection from '../util/DashboardSection';

const Dashboard = () => {
  return (
    <motion.div
      className='flex flex-col gap-12'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className='flex items-center w-full gap-2'>
        <AiOutlineBarChart size={28} className='text-green-300' />
        <h1 className='text-2xl font-bold'>Dashboard</h1>
        <AiOutlineEllipsis size={28} className='w-fit ml-auto text-gray-100 p-[6px] rounded-md border border-zinc-700 hover:bg-zinc-700 transition active:scale-90' />
      </div>
      <DashboardSection grid={true}>
        <TodaysDate />
        <TasksDueToday />
      </DashboardSection>
      <DashboardSection grid={true}>
        <Progression />
        <DailyQuote />
      </DashboardSection>
      <DashboardSection>
        <Stats />
      </DashboardSection>
      
    </motion.div>
  );
};

export default Dashboard;
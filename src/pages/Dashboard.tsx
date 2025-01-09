import { AiOutlineBarChart } from 'react-icons/ai';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

import Stats from '../components/dashboard/Stats';
import TodaysDate from '../components/dashboard/TodaysDate';
import TasksDueToday from '../components/dashboard/TasksDueToday';
import Progression from '../components/dashboard/Progression';
import DailyQuote from '../components/dashboard/DailyQuote';
import TaskSettingsSidebar from '../components/sidebar/TaskSettingsSidebar';

import DashboardSection from '../util/DashboardSection';
import PageHeading from '../util/PageHeading';

const Dashboard = () => {
  const [openSettings, setOpenSettings] = useState<boolean>(false);
  
  const toggleSettings = () => {
    setOpenSettings((prevState) => !prevState);
  };

  return (
    <motion.div
      className='flex flex-col gap-12'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <PageHeading icon={<AiOutlineBarChart size={28} className='text-green-300' />} title='Dashboard' />
      <DashboardSection grid={true}>
        <TodaysDate />
        <TasksDueToday toggleSettings={toggleSettings} />
      </DashboardSection>
      <DashboardSection grid={true}>
        <Progression />
        <DailyQuote />
      </DashboardSection>
      <DashboardSection>
        <Stats />
      </DashboardSection>
      <AnimatePresence>
        {openSettings && <TaskSettingsSidebar toggleSettings={toggleSettings} />}
      </AnimatePresence>
    </motion.div>
  );
};

export default Dashboard;
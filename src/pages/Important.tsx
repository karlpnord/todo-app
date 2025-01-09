import { AiOutlineStar, AiOutlinePlus } from 'react-icons/ai';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

import TaskSettingsSidebar from '../components/sidebar/TaskSettingsSidebar';

import Task from '../components/ui/Task';
import PageHeading from '../util/PageHeading';

const Important = () => {
  const [openSettings, setOpenSettings] = useState<boolean>(false);
  
  const toggleSettings = () => {
    setOpenSettings((prevState) => !prevState);
  };
  
  return (
    <motion.div
      className='flex flex-col gap-12 h-full'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <PageHeading icon={<AiOutlineStar size={28} className='text-red-400' />} title='Important' />
      <ul className='flex-1'>
        <Task title='Task 1' toggleSettings={toggleSettings} />
        <Task title='Task 2' toggleSettings={toggleSettings} />
        <Task title='Task 3' toggleSettings={toggleSettings} />
        <Task title='Task 4' toggleSettings={toggleSettings} />
        <Task title='Task 5' toggleSettings={toggleSettings} />
      </ul>
      <form className='flex items-center gap-4 w-full p-4 rounded-md cursor-pointer hover:bg-zinc-700/50 transition'>
        <AiOutlinePlus size={20} />
        <span>Add Task</span>
      </form>
      <AnimatePresence>
        {openSettings && <TaskSettingsSidebar toggleSettings={toggleSettings} />}
      </AnimatePresence>
    </motion.div>
  );
};

export default Important;
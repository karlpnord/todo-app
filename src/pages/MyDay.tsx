import { AiOutlineSun } from 'react-icons/ai';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import useTaskStore from '../store/taskStore';

import TaskSettingsSidebar from '../components/sidebar/TaskSettingsSidebar';
import TaskList from '../components/ui/TaskList';
import AddTaskMyDayForm from '../components/form/AddTaskMyDayForm';
import PageHeading from '../util/PageHeading';

const MyDay = () => {
  const { myDayTasks } = useTaskStore();
  
  const [openSettings, setOpenSettings] = useState<boolean>(false);
  
  const toggleSettings = () => {
    setOpenSettings((prevState) => !prevState);
  };

  return (
    <motion.div
      className='flex flex-col gap-12 h-full max-h-[calc(100vh-3rem)]'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <PageHeading icon={<AiOutlineSun size={28} className='text-yellow-300' />} title='My Day' />
      <TaskList taskList={myDayTasks} toggleSettings={toggleSettings} emptyText='No tasks added for today yet' />
      <AddTaskMyDayForm />
      <AnimatePresence>
        {openSettings && <TaskSettingsSidebar toggleSettings={toggleSettings} />}
      </AnimatePresence>
    </motion.div>
  );
};

export default MyDay;


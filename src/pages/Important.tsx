import { AiOutlineStar } from 'react-icons/ai';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import useTaskStore from '../store/taskStore';

import TaskSettingsSidebar from '../components/sidebar/TaskSettingsSidebar';
import TaskList from '../components/ui/TaskList';
import AddTaskForm from '../components/form/AddTaskForm';
import PageHeading from '../util/PageHeading';

const Important = () => {
  const { importantTasks } = useTaskStore();
  
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
      <PageHeading icon={<AiOutlineStar size={28} className='text-red-400' />} title='Important Tasks' />
      <TaskList taskList={importantTasks} toggleSettings={toggleSettings} emptyText='No important tasks added yet' />
      <AddTaskForm isImportant={true} />
      <AnimatePresence>
        {openSettings && <TaskSettingsSidebar toggleSettings={toggleSettings} />}
      </AnimatePresence>
    </motion.div>
  );
};

export default Important;
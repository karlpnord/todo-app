import { AiOutlineHome } from 'react-icons/ai';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import useTaskStore from '../store/taskStore';

import TaskSettingsSidebar from '../components/sidebar/TaskSettingsSidebar';
import TaskList from '../components/ui/TaskList';
import AddTaskForm from '../components/form/AddTaskForm';
import PageHeading from '../util/PageHeading';

const AllTasks = () => {
  const { allTasks } = useTaskStore();
  
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
      <PageHeading icon={<AiOutlineHome size={28} className='text-blue-400' />} title='All Tasks' />
      <TaskList taskList={allTasks} toggleSettings={toggleSettings} emptyText='No tasks added yet' />
      <AddTaskForm />
      <AnimatePresence>
        {openSettings && <TaskSettingsSidebar toggleSettings={toggleSettings} />}
      </AnimatePresence>
    </motion.div>
  );
};

export default AllTasks;
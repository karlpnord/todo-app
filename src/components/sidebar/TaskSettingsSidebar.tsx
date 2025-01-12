import { AnimatePresence, motion } from 'motion/react';
import { AiOutlineCalendar, AiOutlineClose } from 'react-icons/ai';
import { useFormatDate } from '../../hooks/useFormatDate';
import { useState } from 'react';
import useTaskStore from '../../store/taskStore';

import DeleteTaskModal from '../ui/DeleteTaskModal';
import TaskSettingsImportant from './task-settings/TaskSettingsImportant';
import TaskSettingsCompleted from './task-settings/TaskSettingsCompleted';
import TaskSettingsDelete from './task-settings/TaskSettingsDelete';
import TaskSettingsUpdate from './task-settings/TaskSettingsUpdate';

interface Props {
  toggleSettings: () => void;
}

const TaskSettingsSidebar = ({ toggleSettings }: Props) => {
  const { activeTask } = useTaskStore();
  
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  
  const date = useFormatDate(activeTask?.createdAt);

  const toggleDeleteModal = () => {
    setDeleteModalOpen((prev) => !prev);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className='fixed inset-0 left-0 z-40 bg-zinc-900 bg-opacity-50 backdrop-blur-sm'
      onClick={toggleSettings}
    >
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
        className='fixed right-0 top-0 flex flex-col gap-2 w-64 h-screen p-4 bg-zinc-800 text-gray-100 z-50'
      >
        <div className='flex justify-between items-center border-b border-zinc-600 pb-3 mb-2'>
          <h2 className='text-2xl font-bold'>Task Settings</h2>
          <button onClick={toggleSettings} className='w-fit text-gray-100 p-1 rounded-md border border-zinc-700 hover:bg-zinc-700 transition active:scale-90'>
            <AiOutlineClose className='text-gray-50' size={20} />
          </button>
        </div>
        <ul className='flex flex-col gap-2'>
          <TaskSettingsUpdate />
          <TaskSettingsCompleted />
          <TaskSettingsImportant />
          <TaskSettingsDelete toggleDeleteModal={toggleDeleteModal} />
        </ul>
        <div className='px-2 pb-2 py-4 mt-auto flex items-center gap-1 border-t border-zinc-600'>
          <AiOutlineCalendar size={18} className='text-blue-400' />
          <h3>Created: {date}</h3>
        </div>
      </motion.div>
      <AnimatePresence>
        {deleteModalOpen && <DeleteTaskModal toggleModal={toggleDeleteModal} toggleSettings={toggleSettings} taskId={activeTask?.id} /> }
      </AnimatePresence>
    </motion.div>
  );
};

export default TaskSettingsSidebar;
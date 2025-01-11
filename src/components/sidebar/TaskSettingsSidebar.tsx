import { motion } from 'motion/react';
import { AiOutlineDelete, AiOutlineStar } from 'react-icons/ai';
import useTaskStore from '../../store/taskStore';

interface Props {
  toggleSettings: () => void;
}

const TaskSettingsSidebar = ({ toggleSettings }: Props) => {
  const { activeTask } = useTaskStore();
  const date = activeTask?.createdAt;
  
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
        <h2 className='text-xl'>Settings</h2>
        <ul className='flex flex-col gap-2'>
          <li className='bg-[#3B3B3E] rounded-md p-2'>Update Title</li>
          <li className='flex items-center bg-[#3B3B3E] rounded-md p-2'>
            <AiOutlineStar size={20} />
            <span>Mark Important</span>
          </li>
          <li className='flex items-center bg-[#3B3B3E] rounded-md p-2'>
            <AiOutlineDelete size={20} />
            <span>Delete</span>
          </li>
        </ul>
        <div className='p-2 mt-auto'>
          <h3>Created: {date?.toLocaleDateString()}</h3>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TaskSettingsSidebar;
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { FaRegCircle, FaRegCircleCheck } from 'react-icons/fa6';
import { Task as TaskType } from '../../types/types';
import { motion } from 'motion/react';
import useTaskStore from '../../store/taskStore';

interface Props {
  task: TaskType;
  toggleSettings: () => void;
}

const Task = ({ task, toggleSettings }: Props) => {
  const { setActiveTask, toggleTaskImportant, toggleTaskComplete } = useTaskStore();

  const handleClick = () => {
    setActiveTask(task);
    toggleSettings();
  };

  const toggleImportant = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    toggleTaskImportant(task.id);
  };

  const toggleComplete = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    toggleTaskComplete(task.id);
  };
  
  return (
    <motion.li
      onClick={handleClick}
      className='flex items-center gap-2 p-4 bg-zinc-800 mb-2 rounded-md hover:bg-zinc-700 transition'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}
    >
      <div onClick={toggleComplete}>
        <motion.div
          key={task.isCompleted ? 'completed' : 'notCompleted'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className='cursor-pointer'
        >
          {task.isCompleted ? (
            <FaRegCircleCheck size={18} className='text-green-400' />
          ) : (
            <FaRegCircle size={18} className='text-gray-100' />
          )}
        </motion.div>
      </div>
      <motion.span
        className={`${task.isCompleted ? 'line-through text-gray-400' : 'text-gray-100'} cursor-pointer`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={toggleComplete}
      >
        {task.title}
      </motion.span>
      <div
        onClick={toggleImportant}
        className='ml-auto text-gray-300 hover:text-blue-400 transition'
      >
        <motion.div
          key={task.isImportant ? 'important' : 'notImportant'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {task.isImportant ? (
            <AiFillStar className='text-blue-400' size={20} />
          ) : (
            <AiOutlineStar size={20} />
          )}
        </motion.div>
      </div>
    </motion.li>
  );
};

export default Task;
import { motion } from 'motion/react';
import { AiOutlineCarryOut } from 'react-icons/ai';
import { Task as TaskType } from '../../types/types';

import Task from './Task';

interface Props {
  taskList: TaskType[];
  toggleSettings: () => void;
  emptyText: string;
}

const TaskList = ({ taskList, toggleSettings, emptyText }: Props) => {
  return (
    <ul className='flex-1 overflow-y-auto scrollbar-rounded scrollbar-thumb-zinc-900 scrollbar-thin'>
      {taskList.length === 0 ? (
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className='flex flex-col items-center justify-center h-full'
        >
          <AiOutlineCarryOut size={36} className='text-blue-400' />
          <h2>{emptyText}</h2>
        </motion.li>
      ) : (
        taskList.map(task => (
          <Task key={task.id} task={task} toggleSettings={toggleSettings} />
        ))
      )}
    </ul>
  );
};

export default TaskList;
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { Task as TaskType } from '../../types/types';
import useTaskStore from '../../store/taskStore';

interface Props {
  task: TaskType;
  toggleSettings: () => void;
}

const Task = ({ task, toggleSettings }: Props) => {
  const { setActiveTask } = useTaskStore();

  const handleClick = () => {
    toggleSettings();
    setActiveTask(task);
  };
  
  return (
    <li
      onClick={handleClick}
      className='flex items-center gap-2 p-4 bg-zinc-800 mb-2 rounded-md hover:bg-zinc-700 transition'
    >
      <div
        className={`${task.isCompleted ? 'bg-gray-300' : ''} border-2 border-gray-300 rounded-full w-4 h-4 cursor-pointer`}
      >
      </div>
      <span>
        {task.title}
      </span>
      <div className='ml-auto text-gray-300 hover:text-blue-400 transition'>
        {task.isImportant ? <AiFillStar size={20} /> : <AiOutlineStar size={20} />}
      </div>
    </li>
  );
};

export default Task;
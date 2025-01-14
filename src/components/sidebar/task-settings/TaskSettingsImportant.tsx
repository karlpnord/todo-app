import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import useTaskStore from '../../../store/taskStore';

const TaskSettingsImportant = () => {
  const { activeTask, toggleTaskImportant } = useTaskStore();
  
  const toggleImportant = () => {
    if (activeTask) {
      toggleTaskImportant(activeTask.id);
    }
  };
  
  return (
    <li
      onClick={toggleImportant}
      className='flex items-center gap-2 rounded-md px-2 py-3 cursor-pointer bg-[#2e2e32] hover:bg-zinc-700 transition'
    >
      {activeTask?.isImportant ? (
        <AiFillStar className='text-yellow-400' size={20} />
      ) : (
        <AiOutlineStar className='text-yellow-400' size={20} />
      )}
      <span>Mark Important</span>
    </li>
  );
};

export default TaskSettingsImportant;
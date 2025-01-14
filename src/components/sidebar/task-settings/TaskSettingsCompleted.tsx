import { FaRegCircle, FaRegCircleCheck } from 'react-icons/fa6';
import useTaskStore from '../../../store/taskStore';

const TaskSettingsCompleted = () => {
  const { activeTask, toggleTaskComplete } = useTaskStore();
  
  const toggleComplete = () => {
    if (activeTask) {
      toggleTaskComplete(activeTask.id);
    }
  };
  
  return (
    <li
      onClick={toggleComplete}
      className='flex items-center gap-2 rounded-md px-2 py-3 cursor-pointer bg-[#2e2e32] hover:bg-zinc-700 transition'
    >
      {activeTask?.isCompleted ? (
        <FaRegCircleCheck size={18} className='text-green-400' />
      ) : (
        <FaRegCircle size={18} className='text-green-400' />
      )}
      <span>Mark Completed</span>
    </li>
  );
};

export default TaskSettingsCompleted;
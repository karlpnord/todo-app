import { AiOutlinePlus } from 'react-icons/ai';
import { useState, FormEvent } from 'react';
import { Task as TaskType } from '../../types/types';

import useTaskStore from '../../store/taskStore';

interface Props {
  isImportant?: boolean;
}

const AddTaskMyDayForm = ({ isImportant = false }: Props) => {
  const { addToMyDay } = useTaskStore();

  const [taskTitle, setTaskTitle] = useState<string>('');

  const handleAddTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (taskTitle.trim().length === 0) {
      return;
    }
      
    const activeElement = document.activeElement as HTMLElement | null;
    if (activeElement && typeof activeElement.blur === 'function') {
      activeElement.blur();
    }
  
    const newTask: TaskType = {
      id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted: false,
      isImportant: isImportant,
      createdAt: new Date()
    };
    addToMyDay(newTask);
    setTaskTitle('');
  };
  
  return (
    <form onSubmit={handleAddTask} className='flex relative items-center group'>
      <button className='absolute left-3 text-gray-100 cursor-pointer group-hover:bg-zinc-700 transition'>
        <AiOutlinePlus size={20} />
      </button>
      <input
        onChange={(e) => setTaskTitle(e.target.value)}
        value={taskTitle}
        placeholder='Add Task'
        className='bg-[#1e1e1e] w-full rounded-md p-4 pl-10 text-gray-100 focus:outline-none focus:ring-0 focus:bg-zinc-700 group-hover:bg-zinc-700 transition'
      />
    </form>
  );
};

export default AddTaskMyDayForm;
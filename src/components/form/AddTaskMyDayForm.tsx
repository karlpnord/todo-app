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
  
    // Check for valid input
    if (taskTitle.trim().length === 0) {
      setTaskTitle('');
      return;
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
      <button
        className='absolute left-2 text-gray-300 cursor-pointer bg-zinc-800'
        type='submit'
        aria-label='Add task'
      >
        <AiOutlinePlus size={28} />
      </button>
      <input
        onChange={(e) => setTaskTitle(e.target.value)}
        value={taskTitle}
        placeholder='Add Task'
        className='bg-zinc-800 w-full rounded-md p-4 pl-10 text-gray-100 focus:outline-none focus:ring-0'
      />
    </form>
  );
};

export default AddTaskMyDayForm;
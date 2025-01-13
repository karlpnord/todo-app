import { AiOutlinePlus } from 'react-icons/ai';
import { useState, FormEvent } from 'react';
import { Task as TaskType } from '../../types/types';

import useTaskStore from '../../store/taskStore';

interface Props {
  isImportant?: boolean;
  listId?: string | null;
}

const AddTaskForm = ({ isImportant = false, listId = null }: Props) => {
  const { addTask } = useTaskStore();

  const [taskTitle, setTaskTitle] = useState<string>('');

  const handleAddTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (taskTitle.trim().length === 0) {
      return;
    }
  
    const newTask: TaskType = {
      id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted: false,
      isImportant: isImportant,
      createdAt: new Date()
    };
    addTask(newTask, listId);
    setTaskTitle('');
  };
  
  return (
    <form onSubmit={handleAddTask} className='flex relative items-center group'>
      <button className='absolute left-3 text-gray-100 cursor-pointer bg-zinc-800'>
        <AiOutlinePlus size={20} />
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

export default AddTaskForm;
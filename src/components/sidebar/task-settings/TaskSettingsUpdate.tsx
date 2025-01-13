import { AiOutlineEdit } from 'react-icons/ai';
import { useState, useEffect, FormEvent } from 'react';
import useTaskStore from '../../../store/taskStore';
import { AnimatePresence } from 'motion/react';

import TaskUpdateMessage from '../../../util/TaskUpdateMessage';

const TaskSettingsUpdate = () => {
  const { activeTask, updateTaskTitle } = useTaskStore();
  const [value, setValue] = useState<string>('');
  const [notifSuccess, setNotifSuccess] = useState<boolean>(false);

  const clearNotification = () => setNotifSuccess(false);

  useEffect(() => {
    if (activeTask) {
      setValue(activeTask.title);
    }
  }, [activeTask]);

  const handleUpdateTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (activeTask) {
      updateTaskTitle(activeTask?.id, value);
      setNotifSuccess(true);
    }    
  };
  
  return (
    <li className='border-b border-zinc-700 mb-2 pb-4'>
      <h2 className='mb-2 font-semibold'>Update title</h2>
      <form onSubmit={handleUpdateTask} className='relative group flex items-center gap-2 rounded-md px-2 py-3 cursor-pointer bg-[#2e2e32] hover:bg-zinc-700 transition'>
        <button type='submit' className='absolute bg-[#2e2e32] group-hover:bg-zinc-700 transition'>
          <AiOutlineEdit className='text-blue-400' size={20} />
        </button>
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          placeholder='Task name'
          className='bg-[#2e2e32] w-full rounded-md pl-6 focus:outline-none focus:ring-0 group-hover:bg-zinc-700 transition'
        />
      </form>
      <AnimatePresence>
        {notifSuccess && <TaskUpdateMessage removeNotif={clearNotification} />}
      </AnimatePresence>
    </li>
  );
};

export default TaskSettingsUpdate;
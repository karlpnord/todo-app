import { AiOutlineEdit } from 'react-icons/ai';

const TaskSettingsUpdate = () => {
  return (
    <li className='flex items-center gap-2 rounded-md px-2 py-3 cursor-pointer bg-[#2e2e32] hover:bg-zinc-700 transition'>
      <AiOutlineEdit className='text-blue-400' size={20} />
      Update Title
    </li>
  );
};

export default TaskSettingsUpdate;
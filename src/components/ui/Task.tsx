import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { useState } from 'react';

interface Props {
  title: string;
  toggleSettings?: () => void;
}

const Task = ({ title, toggleSettings }: Props) => {
  const [taskChecked, setTaskChecked] = useState<boolean>(false);
  const [taskImportant, setTaskImportant] = useState<boolean>(false);
  
  const toggleChecked = () => {
    setTaskChecked((prevState) => !prevState);
  };

  const toggleImportant = () => {
    setTaskImportant((prevState) => !prevState);
  };
  
  return (
    <li className='flex items-center gap-2 p-4 bg-zinc-800 mb-2 rounded-md'>
      <div
        className={`${taskChecked ? 'bg-gray-300' : ''} border-2 border-gray-300 rounded-full w-4 h-4`}
        onClick={toggleChecked}
      >
      </div>
      <div onClick={toggleSettings} className='cursor-pointer'>
        {title}
      </div>
      <div onClick={toggleImportant} className='ml-auto text-gray-300 hover:text-blue-400 transition'>
        {taskImportant ? <AiFillStar size={20} /> : <AiOutlineStar size={20} />}
      </div>
    </li>
  );
};

export default Task;
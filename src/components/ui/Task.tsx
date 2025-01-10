import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { useState } from 'react';

interface Props {
  title: string;
  isImportant: boolean;
  toggleSettings?: () => void;
}

const Task = ({ title, isImportant, toggleSettings }: Props) => {
  const [taskChecked, setTaskChecked] = useState<boolean>(false);
  
  const toggleChecked = (e: React.MouseEvent) => {
    e.stopPropagation();
    setTaskChecked((prevState) => !prevState);
  };
  
  return (
    <li onClick={toggleSettings} className='flex items-center gap-2 p-4 bg-zinc-800 mb-2 rounded-md hover:bg-zinc-700 transition'>
      <div
        className={`${taskChecked ? 'bg-gray-300' : ''} border-2 border-gray-300 rounded-full w-4 h-4 cursor-pointer`}
        onClick={toggleChecked}
      >
      </div>
      <span>
        {title}
      </span>
      <div className='ml-auto text-gray-300 hover:text-blue-400 transition'>
        {isImportant ? <AiFillStar size={20} /> : <AiOutlineStar size={20} />}
      </div>
    </li>
  );
};

export default Task;
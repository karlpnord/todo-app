import { AiFillDelete } from 'react-icons/ai';
import { useState, FormEvent, useRef } from 'react';
import useTaskStore from '../store/taskStore';
import { AnimatePresence } from 'motion/react';

import ListUpdateMessage from './ListUpdateMessage';

interface Props {
  icon: JSX.Element;
  id: string;
  title: string;
  deleteIcon?: boolean;
  deleteHandler?: () => void;
}

const PageHeading = ({ icon, id, title, deleteIcon, deleteHandler }: Props) => {
  const { updateListName } = useTaskStore();
  const [listQuery, setListQuery] = useState<string>(title);
  const inputRef = useRef<HTMLInputElement>(null);
  const [notifSuccess, setNotifSuccess] = useState<boolean>(false);

  const clearNotification = () => setNotifSuccess(false);
  
  const handleUpdateListName = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (listQuery.trim().length === 0) {
      setListQuery('');
      return;
    }

    if (inputRef.current) {
      inputRef.current.blur();
    }
    
    setNotifSuccess(true);
    updateListName(id, listQuery);
  };
  
  return (
    <div className='flex items-center w-full relative gap-2'>
      <form onSubmit={handleUpdateListName} className='flex items-center'>
        {icon}
        <input
          ref={inputRef}
          onChange={(e) => setListQuery(e.target.value)}
          value={listQuery}
          placeholder='List title'
          className='bg-[#1e1e1e] w-full pl-2 pb-1 rounded-md text-2xl font-bold text-gray-100 focus:outline-none focus:ring-0'
        />
      </form>
      {deleteIcon && (
        <button 
          onClick={deleteHandler}
          type='button'
          aria-label='Delete list' 
          className='w-fit ml-auto text-red-400 p-[6px] rounded-md border border-zinc-700 hover:bg-zinc-700 transition active:scale-90'
        >
          <AiFillDelete size={20} />
        </button>
      )}
      <AnimatePresence>
        {notifSuccess && <ListUpdateMessage removeNotif={clearNotification} />}
      </AnimatePresence>
    </div>
  );
};

export default PageHeading;
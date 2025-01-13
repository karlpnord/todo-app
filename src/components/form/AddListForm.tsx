import { AiOutlinePlus } from 'react-icons/ai';
import { useState, FormEvent } from 'react';
import useTaskStore from '../../store/taskStore';

const AddListForm = () => {
  const { addList } = useTaskStore();

  const [listQuery, setListQuery] = useState<string>('');

  const handleAddList = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addList(listQuery);
    setListQuery('');
  };

  return (
    <form onSubmit={handleAddList} className='flex relative mt-auto items-center group'>
      <div className='border-t border-zinc-600 pb-2' />
      <button className='absolute left-3 text-gray-100 cursor-pointer bg-zinc-700'>
        <AiOutlinePlus size={20} />
      </button>
      <input
        onChange={(e) => setListQuery(e.target.value)}
        value={listQuery}
        placeholder='New List'
        className='bg-zinc-700 w-full rounded-md p-2 pl-10 text-gray-100 focus:outline-none focus:ring-0'
      />
    </form>
  );
};

export default AddListForm;
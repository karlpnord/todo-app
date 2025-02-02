import { AiFillDelete } from 'react-icons/ai';

interface Props {
  icon: JSX.Element;
  title: string;
  deleteIcon?: boolean;
  deleteHandler?: () => void;
}

const PageHeading = ({ icon, title, deleteIcon, deleteHandler }: Props) => {
  return (
    <div className='flex items-center w-full gap-2'>
      {icon}
      <h1 className='text-2xl font-bold break-all'>{title}</h1>
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
    </div>
  );
};

export default PageHeading;
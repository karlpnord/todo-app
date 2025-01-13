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
      {deleteIcon && <AiFillDelete onClick={deleteHandler} size={32} className='w-fit ml-auto text-red-400 p-[6px] rounded-md border border-zinc-700 hover:bg-zinc-700 transition active:scale-90' />}
    </div>
  );
};

export default PageHeading;
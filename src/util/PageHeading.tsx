import { AiOutlineEllipsis } from 'react-icons/ai';

interface Props {
  icon: JSX.Element;
  title: string;
}

const PageHeading = ({ icon, title }: Props) => {
  return (
    <div className='flex items-center w-full gap-2'>
      {icon}
      <h1 className='text-2xl font-bold'>{title}</h1>
      <AiOutlineEllipsis size={28} className='w-fit ml-auto text-gray-100 p-[6px] rounded-md border border-zinc-700 hover:bg-zinc-700 transition active:scale-90' />
    </div>
  );
};

export default PageHeading;
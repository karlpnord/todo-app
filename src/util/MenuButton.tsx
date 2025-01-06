import { AiOutlineMenu } from 'react-icons/ai';

interface Props {
  toggleNav: () => void;
}

const MenuButton = ({ toggleNav }: Props) => {
  return (
    <button onClick={toggleNav} className='w-fit text-gray-100 p-[6px] rounded-md border border-zinc-700 hover:bg-zinc-700 transition active:scale-90'>
      <AiOutlineMenu size={20} />
    </button>
  );
};

export default MenuButton;
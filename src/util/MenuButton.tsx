import { AiOutlineMenu } from 'react-icons/ai';

interface Props {
  toggleNav: () => void;
}

const MenuButton = ({ toggleNav }: Props) => {
  return (
    <button onClick={toggleNav} className='w-fit text-gray-100'>
      <AiOutlineMenu size={24} />
    </button>
  );
};

export default MenuButton;
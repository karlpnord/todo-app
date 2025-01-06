import { motion } from 'motion/react';
import { AiOutlineMenu, AiOutlinePlus, AiOutlineEllipsis } from 'react-icons/ai';
import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import MenuButton from '../../util/MenuButton';
import NavItem from './NavItem';
import Input from '../form/Input';
import SidebarUserInfo from './SidebarUserInfo';
import NavList from './NavList';

interface Props {
  toggleNav: () => void;
}

const MobileSidebar = ({ toggleNav }: Props) => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate('/all-tasks');
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toggleNav();
    navigateHandler();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className='fixed inset-0 z-40 bg-zinc-900 bg-opacity-50 backdrop-blur-sm'
      onClick={toggleNav}
    >
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
        className='flex flex-col gap-4 w-fit h-screen p-4 bg-zinc-800 text-gray-100 relative z-50'
      >
        <div className='flex justify-between items-center'>
          <MenuButton toggleNav={toggleNav} />
          <AiOutlineEllipsis size={20} />
        </div>
        <SidebarUserInfo />
        <form onSubmit={submitHandler}>
          <Input />
        </form>
        <nav onClick={toggleNav}>
          <NavList />
        </nav>
        <nav>
          <NavItem icon={<AiOutlineMenu size={20} className='text-blue-400' />} title='Custom List' amount={2} />
        </nav>
        <div className='mt-auto'>
          <div className='border-t border-zinc-600 pb-2' />
          <div className='flex items-center gap-4 w-full p-2 rounded-md cursor-pointer hover:bg-zinc-700/50 transition'>
            <AiOutlinePlus size={20} />
            <span>New List</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MobileSidebar;
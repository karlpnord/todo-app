import { motion } from 'motion/react';
import MenuButton from '../util/MenuButton';
import { AiOutlineSun, AiOutlineStar, AiOutlineHome, AiOutlineMenu, AiOutlinePlus } from 'react-icons/ai';
import NavItem from './NavItem';
import Input from './form/Input';
import NavUserInfo from './NavUserInfo';

interface Props {
  toggleNav: () => void;
}

const MobileSideNav = ({ toggleNav }: Props) => {
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
        <MenuButton toggleNav={toggleNav} />
        <NavUserInfo />
        <div>
          <Input />
        </div>
        <nav>
          <ul className='flex flex-col gap-2 pb-2 border-b border-zinc-600'>
            <NavItem icon={<AiOutlineSun size={20} className='text-yellow-300' />} title='My Day' amount={2} />
            <NavItem icon={<AiOutlineStar size={20} className='text-red-400' />} title='Important' amount={0} />
            <NavItem icon={<AiOutlineHome size={20} className='text-blue-400' />} title='All Tasks' amount={2} />
          </ul>
        </nav>
        <nav>
          <NavItem icon={<AiOutlineMenu size={20} className='text-blue-400' />} title='Custom List' amount={2} />
        </nav>
        <div className='mt-auto flex items-center gap-4 w-full p-2 rounded-md cursor-pointer hover:bg-zinc-700/50 transition'>
          <AiOutlinePlus size={20} />
          <span>New List</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MobileSideNav;
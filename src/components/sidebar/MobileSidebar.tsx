import { motion } from 'motion/react';
import { AiOutlineEllipsis } from 'react-icons/ai';

import MenuButton from '../../util/MenuButton';
import SidebarUserInfo from './SidebarUserInfo';
import NavList from './NavList';
import NavCustomLists from './NavCustomLists';
import AddListForm from '../form/AddListForm';

interface Props {
  toggleNav: () => void;
}

const MobileSidebar = ({ toggleNav }: Props) => {
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
        <nav onClick={toggleNav}>
          <NavList />
        </nav>
        <nav onClick={toggleNav}>
          <NavCustomLists />
        </nav>
        <AddListForm />
      </motion.div>
    </motion.div>
  );
};

export default MobileSidebar;
import { Link } from 'react-router-dom';
import { AiOutlineSun, AiOutlineStar, AiOutlineHome } from 'react-icons/ai';

import NavItem from './NavItem';


const NavList = () => {
  return (
    <ul className='flex flex-col gap-2 pb-2 border-b border-zinc-600'>
      <Link to='/myday'>
        <NavItem icon={<AiOutlineSun size={20} className='text-yellow-300' />} title='My Day' amount={2} />
      </Link>
      <Link to='/important'>
        <NavItem icon={<AiOutlineStar size={20} className='text-red-400' />} title='Important' amount={0} />
      </Link>
      <Link to='/all-tasks'>
        <NavItem icon={<AiOutlineHome size={20} className='text-blue-400' />} title='All Tasks' amount={2} />
      </Link>
    </ul>
  );
};

export default NavList;
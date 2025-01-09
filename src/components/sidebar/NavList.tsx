import { NavLink } from 'react-router-dom';
import { AiOutlineSun, AiOutlineStar, AiOutlineHome, AiOutlineBarChart } from 'react-icons/ai';

import NavItem from './NavItem';


const NavList = () => {
  return (
    <ul className='flex flex-col gap-2 pb-2 border-b border-zinc-600'>
      <NavLink to='/' className={({ isActive }) => {
        return (
          'rounded-md' +
          ' ' +
          (isActive && 'bg-zinc-700')
        );
      }}>
        <NavItem icon={<AiOutlineBarChart size={20} className='text-green-300' />} title='Dashboard' />
      </NavLink>
      <NavLink to='/myday' className={({ isActive }) => {
        return (
          'rounded-md' +
          ' ' +
          (isActive && 'bg-zinc-700')
        );
      }}>
        <NavItem icon={<AiOutlineSun size={20} className='text-yellow-300' />} title='My Day' amount={2} />
      </NavLink>
      <NavLink to='/important' className={({ isActive }) => {
        return (
          'rounded-md' +
          ' ' +
          (isActive && 'bg-zinc-700')
        );
      }}>
        <NavItem icon={<AiOutlineStar size={20} className='text-red-400' />} title='Important' amount={0} />
      </NavLink>
      <NavLink to='/all-tasks' className={({ isActive }) => {
        return (
          'rounded-md' +
          ' ' +
          (isActive && 'bg-zinc-700')
        );
      }}>
        <NavItem icon={<AiOutlineHome size={20} className='text-blue-400' />} title='All Tasks' amount={2} />
      </NavLink>
    </ul>
  );
};

export default NavList;
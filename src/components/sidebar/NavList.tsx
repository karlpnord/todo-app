import { NavLink } from 'react-router-dom';
import { AiOutlineSun, AiOutlineStar, AiOutlineHome, AiOutlineBarChart } from 'react-icons/ai';
import useTaskStore from '../../store/taskStore';

import NavItem from './NavItem';


const NavList = () => {
  const { allTasks, importantTasks, myDayTasks } = useTaskStore();
  return (
    <ul className='flex flex-col gap-2 pb-2 border-b border-zinc-600'>
      <NavLink
        to='/'
        className={({ isActive }) => 
          `${isActive ? 'bg-zinc-700' : ''} rounded-md`
        }
      >
        <NavItem icon={<AiOutlineBarChart size={20} className='text-green-300' />} title='Dashboard' />
      </NavLink>
      <NavLink
        to='/myday'
        className={({ isActive }) => 
          `${isActive ? 'bg-zinc-700' : ''} rounded-md`
        }
      >
        <NavItem icon={<AiOutlineSun size={20} className='text-yellow-300' />} title='My Day' amount={myDayTasks.length} />
      </NavLink>
      <NavLink
        to='/important'
        className={({ isActive }) => 
          `${isActive ? 'bg-zinc-700' : ''} rounded-md`
        }
      >
        <NavItem icon={<AiOutlineStar size={20} className='text-red-400' />} title='Important' amount={importantTasks.length} />
      </NavLink>
      <NavLink
        to='/all-tasks'
        className={({ isActive }) => 
          `${isActive ? 'bg-zinc-700' : ''} rounded-md`
        }
      >
        <NavItem icon={<AiOutlineHome size={20} className='text-blue-400' />} title='All Tasks' amount={allTasks.length} />
      </NavLink>
    </ul>
  );
};

export default NavList;
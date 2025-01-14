import { NavLink } from 'react-router-dom';
import { AiOutlineSun, AiOutlineStar, AiOutlineHome, AiOutlineBarChart } from 'react-icons/ai';
import useTaskStore from '../../store/taskStore';

import NavItem from './NavItem';


const NavList = () => {
  const { allTasks, importantTasks, myDayTasks } = useTaskStore();

  return (
    <ul className='flex flex-col gap-2 py-2 border-t border-b border-zinc-600'>
      <li>
        <NavLink
          to='/'
          className={({ isActive }) => 
            `block hover:bg-zinc-700 transition ${isActive ? 'bg-zinc-700' : ''} rounded-md`
          }
        >
          <NavItem icon={<AiOutlineBarChart size={20} className='text-green-300' />} title='Dashboard' />
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/myday'
          className={({ isActive }) => 
            `block hover:bg-zinc-700 transition ${isActive ? 'bg-zinc-700' : ''} rounded-md`
          }
        >
          <NavItem icon={<AiOutlineSun size={20} className='text-yellow-300' />} title='My Day' amount={myDayTasks.length} />
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/important'
          className={({ isActive }) => 
            `block hover:bg-zinc-700 transition ${isActive ? 'bg-zinc-700' : ''} rounded-md`
          }
        >
          <NavItem icon={<AiOutlineStar size={20} className='text-red-400' />} title='Important' amount={importantTasks.length} />
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/all-tasks'
          className={({ isActive }) => 
            `block hover:bg-zinc-700 transition ${isActive ? 'bg-zinc-700' : ''} rounded-md`
          }
        >
          <NavItem icon={<AiOutlineHome size={20} className='text-blue-400' />} title='All Tasks' amount={allTasks.length} />
        </NavLink>
      </li>
    </ul>
  );
};

export default NavList;
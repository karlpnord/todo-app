import NavItem from './NavItem';
import { AiOutlineMenu } from 'react-icons/ai';
import useTaskStore from '../../store/taskStore';
import { NavLink } from 'react-router-dom';
import { motion } from 'motion/react';

const NavCustomLists = () => {
  const { customLists } = useTaskStore();

  return (
    <ul>
      {customLists.length === 0 ? (
        <li className='pl-2'>No lists added</li>
      ): (
        customLists.map((list) => (
          <motion.li key={list.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <NavLink
              to={`/custom/${list.id}`}
              className={({ isActive }) => 
                `block hover:bg-zinc-700 transition ${isActive ? 'bg-zinc-700' : ''} rounded-md`
              }
            >
              <NavItem icon={<AiOutlineMenu size={20} className='text-blue-400' />} title={list.listName} amount={list.tasks.length} />
            </NavLink>
          </motion.li>
        ))
      )}
    </ul>
    
  );
};

export default NavCustomLists;

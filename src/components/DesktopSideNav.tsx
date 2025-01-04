import NavUserInfo from './NavUserInfo';
import NavItem from './NavItem';
import Input from './form/Input';
import { AiOutlineSun, AiOutlineStar, AiOutlineHome, AiOutlineMenu, AiOutlinePlus } from 'react-icons/ai';

const DesktopSideNav = () => {
  return (
    <div
      className='flex flex-col gap-4 w-fit h-screen p-4 bg-zinc-800 text-gray-100'
    >
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
    </div>
  );
};

export default DesktopSideNav;
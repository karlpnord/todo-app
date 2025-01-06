import { AiOutlineMenu, AiOutlinePlus } from 'react-icons/ai';

import SidebarUserInfo from './SidebarUserInfo';
import NavItem from './NavItem';
import Input from '../form/Input';
import NavList from './NavList';

const DesktopSidebar = () => {
  return (
    <div className='flex flex-col gap-4 w-fit h-screen p-4 bg-zinc-800 text-gray-100'>
      <SidebarUserInfo />
      <form>
        <Input />
      </form>
      <nav>
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
    </div>
  );
};

export default DesktopSidebar;
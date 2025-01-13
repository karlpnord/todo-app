import SidebarUserInfo from './SidebarUserInfo';
import NavList from './NavList';
import AddListForm from '../form/AddListForm';
import NavCustomLists from './NavCustomLists';

const DesktopSidebar = () => {
  return (
    <div className='sticky top-0 flex flex-col gap-4 w-fit max-w-[340px] h-screen p-4 pb-8 lg:pb-6 bg-zinc-800 text-gray-100'>
      <SidebarUserInfo />
      <nav>
        <NavList />
      </nav>
      <nav className='overflow-y-auto'>
        <NavCustomLists />
      </nav>
      <AddListForm />
    </div>
  );
};

export default DesktopSidebar;
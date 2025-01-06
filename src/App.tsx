import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { useDeviceSize } from './hooks/useDeviceSize';
import { Routes, Route } from 'react-router-dom';

import MobileSidebar from './components/sidebar/MobileSidebar';
import DesktopSidebar from './components/sidebar/DesktopSidebar';
import MenuButton from './util/MenuButton';
import AllTasks from './pages/AllTasks';
import ImportantTasks from './pages/ImportantTasks';
import MyDay from './pages/MyDay';
import Dashboard from './pages/Dashboard/Dashboard';

const App = () => {
  const { width } = useDeviceSize();
  const [openNav, setOpenNav] = useState<boolean>(false);
  
  const toggleNav = () => {
    setOpenNav((prevState) => !prevState);
  };

  if (width > 768 && openNav) {
    setOpenNav(false);
  }

  return (
    <div className='bg-[#1e1e1e]'>
      {width < 768 && (
        <div className='p-4'>
          <MenuButton toggleNav={toggleNav} />
        </div>
      )}
      <AnimatePresence>
        {openNav && <MobileSidebar toggleNav={toggleNav} />}
      </AnimatePresence>
      <div className='flex text-gray-100'>
        {width >= 768 && <DesktopSidebar /> }
        <div className='p-4 w-full h-full md:mt-6 lg:p-6'>
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path='/myday' element={<MyDay />} />
            <Route path='/important' element={<ImportantTasks />} />
            <Route path='/all-tasks' element={<AllTasks />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
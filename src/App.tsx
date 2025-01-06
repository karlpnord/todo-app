import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { useDeviceSize } from './hooks/useDeviceSize';
import { Routes, Route } from 'react-router-dom';

import MobileSidebar from './components/sidebar/MobileSidebar';
import DesktopSidebar from './components/sidebar/DesktopSidebar';
import MenuButton from './util/MenuButton';
import AllTasks from './components/AllTasks';
import ImportantTasks from './components/ImportantTasks';
import MyDay from './components/MyDay';

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
    <div className='bg-[#1e1e1e] h-screen'>
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
        <div className='p-4'>
          <Routes>
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
import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { useDeviceSize } from './hooks/useDeviceSize';
import { Routes, Route } from 'react-router-dom';

import MobileSidebar from './components/sidebar/MobileSidebar';
import DesktopSidebar from './components/sidebar/DesktopSidebar';
import MenuButton from './util/MenuButton';
import AllTasks from './pages/AllTasks';
import Important from './pages/Important';
import MyDay from './pages/MyDay';
import Dashboard from './pages/Dashboard';
import CustomPage from './pages/CustomPage';
import NotFound from './pages/NotFound';

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
    <div className='flex flex-col bg-[#1e1e1e] min-h-screen'>
      {width < 768 && (
        <div className='p-4 pt-8'>
          <MenuButton toggleNav={toggleNav} />
        </div>
      )}
      <AnimatePresence>
        {openNav && <MobileSidebar toggleNav={toggleNav} />}
      </AnimatePresence>
      <div className='flex flex-1 md:grid md:grid-cols-[auto,1fr] text-gray-100'>
        {width >= 768 && <DesktopSidebar /> }
        <div className='p-4 w-full py-8 lg:p-8 lg:pb-8'>
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path='/myday' element={<MyDay />} />
            <Route path='/important' element={<Important />} />
            <Route path='/all-tasks' element={<AllTasks />} />
            <Route path='/custom/:id' element={<CustomPage />} key={location.pathname} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
import MobileSideNav from './components/MobileSideNav';
import DesktopSideNav from './components/DesktopSideNav';
import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import MenuButton from './util/MenuButton';
import { useDeviceSize } from './hooks/useDeviceSize';

const App = () => {
  const { width } = useDeviceSize();

  const [openNav, setOpenNav] = useState<boolean>(false);
  
  const toggleNav = () => {
    setOpenNav((prevState) => !prevState);
  };

  return (
    <div className='bg-[#1e1e1e] h-screen'>
      {width < 768 && (
        <div className='p-4'>
          <MenuButton toggleNav={toggleNav} />
        </div>
      )}
      <AnimatePresence>
        {openNav && <MobileSideNav toggleNav={toggleNav} />}
      </AnimatePresence>

      {width >= 768 && <DesktopSideNav /> }
    </div>
  );
};

export default App;
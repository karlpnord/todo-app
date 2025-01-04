import MobileSideNav from './components/MobileSideNav';
import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import MenuButton from './util/MenuButton';

const App = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  
  const toggleNav = () => {
    setOpenNav((prevState) => !prevState);
  };

  return (
    <div className='bg-zinc-800 h-screen'>
      <div className='p-4'>
        <MenuButton toggleNav={toggleNav} />
      </div>
      <AnimatePresence>
        {openNav && <MobileSideNav toggleNav={toggleNav} />}
      </AnimatePresence>
    </div>
  );
};

export default App;
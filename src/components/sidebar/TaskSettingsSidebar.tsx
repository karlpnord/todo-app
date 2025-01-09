import { motion } from 'motion/react';

interface Props {
  toggleSettings: () => void;
}

const TaskSettingsSidebar = ({ toggleSettings }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className='fixed inset-0 left-0 z-40 bg-zinc-900 bg-opacity-50 backdrop-blur-sm'
      onClick={toggleSettings}
    >
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
        className='fixed right-0 top-0 flex flex-col gap-4 w-fit h-screen p-4 bg-zinc-800 text-gray-100 z-50'
      >
        <h1>Settings</h1>
      </motion.div>
    </motion.div>
  );
};

export default TaskSettingsSidebar;
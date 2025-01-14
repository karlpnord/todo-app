import { useEffect } from 'react';
import { motion } from 'motion/react';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const NOTIFICATION_TTL: number = 1500;

interface Props {
  removeNotif: () => void;
}

const ListUpdateMessage = ({ removeNotif }: Props) => {
  // Removes list name updated message after 1 second
  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      removeNotif();
    }, NOTIFICATION_TTL);

    return () => clearTimeout(timeoutRef);
  }, [removeNotif]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className='p-4 flex items-center rounded-md gap-2 font-bold bg-zinc-900 border border-zinc-700 fixed z-100 top-10 md:top-20'
    >
      <AiOutlineCheckCircle size={18} className='text-green-500' />
      <h2 className='text-semibold text-gray-100'>List name updated!</h2>
    </motion.div>
  );
};

export default ListUpdateMessage;
import { useEffect } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';

import { motion } from 'motion/react';

const NOTIFICATION_TTL: number = 1000;

interface Props {
  text: string;
  removeNotif: () => void;
}

const SuccessNotification = ({ text, removeNotif }: Props) => {
  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      removeNotif();
    }, NOTIFICATION_TTL);

    return () => clearTimeout(timeoutRef);
  }, [removeNotif]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className='flex flex-col items-center justify-center mx-auto top-48 gap-2 fixed z-100 inset-0 max-w-[320px] max-h-[200px] rounded-md bg-zinc-800 text-gray-100 border border-zinc-700'
    >
      <AiOutlineCheckCircle size={32} />
      <h2 className='font-semibold text-xl'>{text}</h2>
    </motion.div>
  );
};

export default SuccessNotification;
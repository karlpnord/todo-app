import { useEffect } from 'react';
import { motion } from 'motion/react';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const NOTIFICATION_TTL: number = 1000;

interface Props {
  removeNotif: () => void;
}

const TaskUpdateMessage = ({ removeNotif }: Props) => {
  // Removes task updated message after 1 second
  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      removeNotif();
    }, NOTIFICATION_TTL);

    return () => clearTimeout(timeoutRef);
  }, [removeNotif]);

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='flex items-center gap-1 pt-2 text-green-500 text-sm font-medium'
    >
      <AiOutlineCheckCircle size={18} />
      Task updated!
    </motion.p>
  );
};

export default TaskUpdateMessage;
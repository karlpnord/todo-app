import { motion } from 'motion/react';
import { AiOutlineArrowUp, AiOutlineCaretUp } from 'react-icons/ai';

interface Props {
  cardName: string;
  cardTitle: string;
  statNumber: number;
  activeCard: string;
  clickHandler: (card: string) => void;
}

const StatItem = ({ activeCard, clickHandler, cardName, cardTitle, statNumber }: Props) => {
  return (
    <motion.div
      className='flex flex-col gap-2 justify-between rounded-md p-4 flex-1'
      onClick={() => clickHandler('total')}
      animate={{
        backgroundColor: activeCard === cardName ? '#166534' : '#18181b'
      }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
    >
      <div className='flex justify-between items-center mb-2'>
        <h2 className='text-gray-200 font-medium'>{cardTitle}</h2>
        <motion.div
          className='rotate-45 border border-gray-100 rounded-full p-1'
          animate={{
            backgroundColor: activeCard === cardName ? '#f3f4f6' : '#18181b',
            color: activeCard === cardName ? '#000000' : '#f3f4f6'
          }}
        >
          <AiOutlineArrowUp size={18} />
        </motion.div>
      </div>
      <motion.h3
        className='font-bold text-5xl'
        animate={{
          color: activeCard === cardName ? '#f3f4f6' : '#60a5fa'
        }}
      >
        {statNumber}
      </motion.h3>
      <div className='flex items-center gap-1'>
        <motion.div
          className='flex items-center w-fit px-[2px] rounded-md border border-gray-100'
          animate={{
            borderColor: activeCard === cardName ? '#a3e635' : '#f3f4f6',
            color: activeCard === cardName ? '#a3e635' : '#f3f4f6'
          }}
        >
          <span className='text-[8px]'>5</span>
          <AiOutlineCaretUp size={10} />
        </motion.div>
        <motion.p
          className='text-xs font-light'
          animate={{
            color: activeCard === cardName ? '#a3e635' : '#f3f4f6'
          }}
        >
        Increased from last month
        </motion.p>
      </div>
    </motion.div>
  );
};

export default StatItem;
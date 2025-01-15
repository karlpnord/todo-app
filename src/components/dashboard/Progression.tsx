import { motion } from 'framer-motion';
import useTaskStore from '../../store/taskStore';
import { useProgressionCalculations } from '../../hooks/useProgressionCalculations';

const Progression = () => {
  const { myDayTasks } = useTaskStore();
  
  const {
    tasksCompleted,
    totalTasks,
    completionPercentage,
    totalCircumference,
    strokeDashoffset,
  } = useProgressionCalculations(myDayTasks);

  return (
    <div>
      <h2 className='text-2xl font-bold mb-2'>Today's Progress</h2>
      <div className='flex justify-between items-center p-4 bg-zinc-900 rounded-md h-40'>
        <div>
          <h2 className='text-5xl text-blue-400 font-bold tracking-tight'>
            {tasksCompleted}/{totalTasks}
          </h2>
          <h3>Completed Today</h3>
        </div>
        <div>
          <div className='relative size-28'>
            <svg
              className='size-full -rotate-90'
              viewBox='0 0 36 36'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx='18' cy='18' r='16' fill='none' className='stroke-current text-zinc-700' strokeWidth='2'></circle>

              <motion.circle
                cx='18'
                cy='18'
                r='16'
                fill='none'
                className='stroke-current text-blue-400'
                strokeWidth='2'
                strokeDasharray={totalCircumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap='round'
                animate={{ strokeDashoffset }}
                transition={{
                  strokeDashoffset: {
                    duration: 1,
                    ease: 'easeInOut',
                  },
                }}
              />
            </svg>

            <motion.div
              className='absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <motion.span
                className='text-center text-2xl font-bold text-gray-100'
                key={completionPercentage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {Math.round(completionPercentage)}%
              </motion.span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progression;

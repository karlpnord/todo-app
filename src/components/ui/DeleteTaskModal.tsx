import { motion } from 'motion/react';
import useTaskStore from '../../store/taskStore';
import Button from './Button';

interface Props {
  toggleModal: () => void;
  toggleSettings: () => void;
  taskId?: string;
}

const DeleteTaskModal = ({ toggleModal, toggleSettings, taskId }: Props) => {
  const { deleteTask, activeTask } = useTaskStore();
  
  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    toggleModal();
  };

  const deleteModalHandler = () => {
    if (taskId) {
      deleteTask(taskId);
      toggleModal();
      toggleSettings();
    }
  };
  
  return (
    <motion.div
      onClick={closeModal}
      className='fixed inset-0 z-60 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className='bg-zinc-800 p-8 rounded-md max-w-[440px] border border-zinc-700 cursor-default relative z-70'
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className='text-xl text-gray-100 font-bold'>Delete Task</h2>
        <p className='text-gray-200'>"{activeTask?.title}" will be deleted permanently.</p>
        <div className='flex gap-2 mt-8'>
          <Button title='Delete' className='bg-red-600 hover:bg-red-500 flex-1' clickHandler={deleteModalHandler} />
          <Button title='Cancel' className='bg-zinc-700 hover:bg-zinc-600 flex-1' clickHandler={toggleModal} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DeleteTaskModal;
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import useTaskStore from '../store/taskStore';
import { useState, useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import PageHeading from '../util/PageHeading';
import TaskList from '../components/ui/TaskList';
import TaskSettingsSidebar from '../components/sidebar/TaskSettingsSidebar';
import AddTaskForm from '../components/form/AddTaskForm';
import DeleteListModal from '../components/ui/DeleteListModal';

const CustomPage = () => {
  const { id } = useParams<{ id: string }>();
  const { customLists } = useTaskStore();
  const navigate = useNavigate();
  const location = useLocation();

  const [openSettings, setOpenSettings] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
    
  const toggleSettings = () => {
    setOpenSettings((prevState) => !prevState);
  };
  
  const filteredList = customLists.find((list) => list.id === id);

  useEffect(() => {
  // If `filteredList` is not found or `customLists` is empty, navigate to the homepage
    if (!filteredList || customLists.length === 0) {
      navigate('/');
    }
  }, [filteredList, customLists, navigate]);

  // If `customLists` is empty or `filteredList` is not found, show a temporary fallback UI
  if (customLists.length === 0 || !filteredList) {
    return <div>Temporary Fallback</div>;
  }


  const deleteModalToggle = () => {
    setOpenDeleteModal((prev) => !prev);
  };
  
  return (
    <motion.div
      key={`${location.pathname}-${id}`}
      className='flex flex-col gap-12 h-full max-h-[calc(100vh-3rem)]'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <PageHeading icon={<AiOutlineMenu size={28} className='text-blue-400' />} title={filteredList.listName} deleteIcon={true} deleteHandler={deleteModalToggle} />
      <TaskList taskList={filteredList.tasks} toggleSettings={toggleSettings} emptyText='No tasks added yet' />
      <AddTaskForm listId={filteredList.id} />
      <AnimatePresence>
        {openSettings && <TaskSettingsSidebar toggleSettings={toggleSettings} />}
      </AnimatePresence>
      <AnimatePresence>
        {openDeleteModal && <DeleteListModal toggleModal={deleteModalToggle} listName={filteredList.listName} listId={filteredList.id} /> }
      </AnimatePresence>
    </motion.div>
  );
};

export default CustomPage;
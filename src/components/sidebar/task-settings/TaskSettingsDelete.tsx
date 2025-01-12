import { AiOutlineDelete } from 'react-icons/ai';

interface Props {
  toggleDeleteModal: () => void;
}

const TaskSettingsDelete = ({ toggleDeleteModal }: Props) => {
  return (
    <li
      onClick={toggleDeleteModal}
      className='flex items-center gap-2 rounded-md px-2 py-3 cursor-pointer bg-[#2e2e32] hover:bg-zinc-700 transition'
    >
      <AiOutlineDelete className='text-red-400' size={20} />
      <span>Delete</span>
    </li>
  );
};

export default TaskSettingsDelete;
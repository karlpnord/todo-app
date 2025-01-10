import Task from '../ui/Task';

interface Props {
  toggleSettings: () => void;
}

const TasksDueToday = ({ toggleSettings }: Props) => {
  return (
    <div>
      <h2 className='text-2xl font-bold mb-2'>Tasks due today</h2>
      <ul className='bg-zinc-900 p-4 overflow-y-scroll rounded-md h-40'>
        <Task title='Task 1' isImportant={false} toggleSettings={toggleSettings} />
        <Task title='Task 2' isImportant={false} toggleSettings={toggleSettings} />
        <Task title='Task 3' isImportant={false} toggleSettings={toggleSettings} />
        <Task title='Task 4' isImportant={false} toggleSettings={toggleSettings} />
        <Task title='Task 5' isImportant={false} toggleSettings={toggleSettings} />
      </ul>
    </div>
  );
};

export default TasksDueToday;
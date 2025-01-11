import Task from '../ui/Task';
import useTaskStore from '../../store/taskStore';

interface Props {
  toggleSettings: () => void;
}

const TasksDueToday = ({ toggleSettings }: Props) => {
  const { myDayTasks } = useTaskStore();
  
  return (
    <div>
      <h2 className='text-2xl font-bold mb-2'>Tasks due today</h2>
      <ul className='bg-zinc-900 p-4 overflow-y-auto rounded-md h-40'>
        {myDayTasks.length === 0 ? (
          <div>No tasks added today yet.</div>
        ) : (
          myDayTasks.map((task) => (
            <Task key={task.id} task={task} toggleSettings={toggleSettings} />
          ))
        )}
      </ul>
    </div>
  );
};

export default TasksDueToday;
import { useState, useMemo } from 'react';

import StatItem from './StatItem';
import SectionHeading from '../../util/SectionHeading';
import useTaskStore from '../../store/taskStore';

const Stats = () => {
  const { myDayTasks, allTasks } = useTaskStore();
  const [activeStatCard, setActiveStatCard] = useState<string>('total');

  const calculations = useMemo(() => {
    // Calculate how many daily tasks remain to be completed
    const dailyTasksToComplete: number = myDayTasks.reduce((count, task) => {
      return task.isCompleted ? count : count + 1;
    }, 0);

    // Calculate how many tasks have been completed
    const tasksCompleted: number = allTasks.reduce((count, task) => {
      return task.isCompleted ? count + 1 : count;
    }, 0);

    return { dailyTasksToComplete, tasksCompleted };
  }, [myDayTasks, allTasks]);

  const clickHandler = (card: string) => {
    setActiveStatCard(card);
  };
  
  return (
    <div>
      <SectionHeading title='Stats' />
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4'>
        <StatItem
          cardName='total'
          cardTitle='Total Tasks'
          statNumber={allTasks.length}
          activeCard={activeStatCard}
          clickHandler={() => clickHandler('total')}
        />
        <StatItem
          cardName='due'
          cardTitle='Due Today'
          statNumber={calculations.dailyTasksToComplete}
          activeCard={activeStatCard}
          clickHandler={() => clickHandler('due')}
        />
        <StatItem
          cardName='completed'
          cardTitle='Completed Tasks'
          statNumber={calculations.tasksCompleted}
          activeCard={activeStatCard}
          clickHandler={() => clickHandler('completed')}
        />
        <StatItem
          cardName='overdue'
          cardTitle='Overdue Tasks'
          statNumber={0}
          activeCard={activeStatCard}
          clickHandler={() => clickHandler('overdue')}
        />
      </div>
    </div>
    
  );
};

export default Stats;
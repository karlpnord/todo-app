import { useState } from 'react';

import StatItem from './StatItem';
import SectionHeading from '../../util/SectionHeading';

const Stats = () => {
  const [activeStatCard, setActiveStatCard] = useState<string>('total');

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
          statNumber={12}
          activeCard={activeStatCard}
          clickHandler={() => clickHandler('total')}
        />
        <StatItem
          cardName='due'
          cardTitle='Due Today'
          statNumber={2}
          activeCard={activeStatCard}
          clickHandler={() => clickHandler('due')}
        />
        <StatItem
          cardName='completed'
          cardTitle='Completed Tasks'
          statNumber={14}
          activeCard={activeStatCard}
          clickHandler={() => clickHandler('completed')}
        />
        <StatItem
          cardName='overdue'
          cardTitle='Overdue Tasks'
          statNumber={3}
          activeCard={activeStatCard}
          clickHandler={() => clickHandler('overdue')}
        />
      </div>
    </div>
    
  );
};

export default Stats;
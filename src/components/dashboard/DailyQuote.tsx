import { dataList, DataItem } from '../../data/dataList';
import { AiOutlineMessage, AiOutlineBulb } from 'react-icons/ai';


const DailyQuote = () => {
  // Generate random number to retrieve random fun fact/quote from dataList
  const randomIndex = Math.floor(Math.random() * dataList.length);
  const randomItem: DataItem = dataList[randomIndex];

  // Fallback if dataList doesnt exist or is empty
  if (!dataList || dataList.length === 0) {
    return (
      <div className='flex flex-col justify-center gap-2 bg-zinc-900 rounded-md h-40 p-4'>
        <h2 className='text-2xl font-bold mb-2'>Daily Quote / Fun Fact</h2>
        <p className='text-gray-100'>No data available for daily quote or fun fact.</p>
      </div>
    );
  }

  const text = randomItem.text;
  const author = 'author' in randomItem ? randomItem.author : undefined;

  return (
    <div>
      <h2 className='text-2xl font-bold mb-2'>Daily Quote / Fun Fact</h2>
      <div className='flex flex-col justify-center gap-2 bg-zinc-900 rounded-md h-40 p-4'>
        {dataList[randomIndex].type === 'quote' ? (
          <AiOutlineMessage size={28} className='text-blue-400' />
        ) : (
          <AiOutlineBulb size={28} className='text-yellow-400' />
        )}
        <p className='text-gray-100'>{text ? text : 'Could not display daily quote / fun fact.'}</p>
        <h3 className='text-gray-300 text-sm'>{author ? '-' + author : ''}</h3>
      </div>
    </div>
  );
};

export default DailyQuote;
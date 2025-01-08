const Progression = () => {
  return (
    <div>
      <h2 className='text-2xl font-bold mb-2'>Today's Progress</h2>
      <div className='flex justify-between items-center p-4 bg-zinc-900 rounded-md h-40'>
        <div>
          <h2 className='text-5xl text-blue-400 font-bold tracking-tight'>3/5</h2>
          <h3>Completed Today</h3>
        </div>
        <div>
          <div className='relative size-28'>
            <svg className='size-full -rotate-90' viewBox='0 0 36 36' xmlns='http://www.w3.org/2000/svg'>
              <circle cx='18' cy='18' r='16' fill='none' className='stroke-current text-zinc-700' strokeWidth='2'></circle>
              <circle cx='18' cy='18' r='16' fill='none' className='stroke-current text-blue-400' strokeWidth='2' strokeDasharray='100.531' strokeDashoffset='40.212' strokeLinecap='round'></circle>
            </svg>
            <div className='absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2'>
              <span className='text-center text-2xl font-bold text-gray-100'>60%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progression;
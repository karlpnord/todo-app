const NavUserInfo = () => {
  return (
    <div className='flex items-center gap-2'>
      <div className='bg-purple-500 rounded-full w-14 h-14 flex items-center justify-center'>
        <h2 className='text-xl'>KN</h2>
      </div>
      <div>
        <h2>Karl Petter Nordgaard</h2>
        <h3 className='text-gray-300 text-sm'>nordgaardkarlpetter@gmail.com</h3>
      </div>
    </div>
  );
};

export default NavUserInfo;
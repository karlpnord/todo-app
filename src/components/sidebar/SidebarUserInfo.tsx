const SidebarUserInfo = () => {
  return (
    <div className='flex items-center gap-2 py-2'>
      <div className='bg-violet-700 rounded-full w-14 h-14 flex items-center justify-center'>
        <h2 className='text-xl text-gray-50'>AB</h2>
      </div>
      <div>
        <h2 className='font-bold'>Username</h2>
        <h3 className='text-gray-300 text-sm'>youremail@gmail.com</h3>
      </div>
    </div>
  );
};

export default SidebarUserInfo;
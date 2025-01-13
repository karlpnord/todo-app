interface Props {
  icon: JSX.Element;
  title: string;
  amount?: number; 
}

const NavItem = ({ icon, title, amount }: Props) => {
  return (
    <div className='flex items-center gap-4 w-full p-2 rounded-md cursor-pointer hover:bg-zinc-700 transition'>
      {icon}
      <span className='break-all'>{title}</span>
      <h3 className='ml-auto'>{amount}</h3>
    </div>
  );
};

export default NavItem;
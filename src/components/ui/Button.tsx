interface Props {
  title: string;
  className: string;
  clickHandler?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ title, className, clickHandler, type }: Props) => {
  return (
    <button type={type} onClick={clickHandler} className={`${className} px-4 py-2 text-gray-100 rounded-md transition`}>
      {title}
    </button>
  );
};

export default Button;
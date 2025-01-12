interface Props {
  title: string;
  className: string;
  clickHandler: () => void;
}

const Button = ({ title, className, clickHandler }: Props) => {
  return (
    <button onClick={clickHandler} className={`${className} px-4 py-2 text-gray-100 rounded-md transition`}>
      {title}
    </button>
  );
};

export default Button;
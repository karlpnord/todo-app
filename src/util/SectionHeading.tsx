interface Props {
  title: string;
}

const SectionHeading = ({ title }: Props) => {
  return (
    <h2 className='text-2xl font-bold mb-2'>{title}</h2>
  );
};

export default SectionHeading;
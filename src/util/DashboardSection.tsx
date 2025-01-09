import { ReactNode } from 'react';

interface Props {
  grid?: boolean;
  children: ReactNode;
}

const DashboardSection = ({ grid = false, children }: Props) => {
  return (
    <section className={`${grid ? 'grid gap-12 grid-cols-1 lg:grid-cols-2 lg:gap-4' : ''}`}>
      {children}
    </section>
  );
};

export default DashboardSection;
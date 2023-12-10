import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function SideMenuWrapper({ children }: Props) {
  return (
    <div className="static top-32 h-full w-full lg:sticky lg:w-60">
      {children}
    </div>
  );
}

export default SideMenuWrapper;

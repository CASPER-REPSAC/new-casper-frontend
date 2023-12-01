import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return <div className="common-center">{children}</div>;
}

export default Layout;

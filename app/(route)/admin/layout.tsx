import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return <div className="common-center mt-20">{children}</div>;
}

export default Layout;

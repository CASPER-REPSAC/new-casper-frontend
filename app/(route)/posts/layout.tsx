import { CommonCenterWrapper } from 'app/_components/common';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return <CommonCenterWrapper>{children}</CommonCenterWrapper>;
}

export default Layout;

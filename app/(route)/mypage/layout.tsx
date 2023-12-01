import { PageTitle } from 'app/_components/molecules';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      <PageTitle pageTitle="MyPage" />
      {children}
    </>
  );
}

export default Layout;

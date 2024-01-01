import { ReactNode } from 'react';
import { PageTitle } from '@app/_components/molecules';
import { PAGE_TITLE } from '@app/_constants/label';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      <PageTitle pageTitle={PAGE_TITLE.myPage} />
      {children}
    </>
  );
}

export default Layout;

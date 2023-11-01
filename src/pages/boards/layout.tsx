import PageTitle from '@src/components/common/PageTitle';
import BoardSideMenu from '@src/components/organism/sideMenu/BoardSideMenu';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
function BoardLayout({ children }: Props) {
  return (
    <>
      <PageTitle pageTitle="a" />
      <BoardSideMenu />
      <main>{children}</main>
    </>
  );
}

export default BoardLayout;

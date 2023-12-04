import { ReactNode } from 'react';
import { PAGE_TITLE } from 'app/_constants/label';
import { BoardSideMenu } from 'app/_components/molecules';
import { SideMenuLayout } from 'app/_components/layout';

interface Props {
  children: ReactNode;
}

function BoardLayout({ children }: Props) {
  return (
    <SideMenuLayout pageTitle={PAGE_TITLE.board} sideMenu={<BoardSideMenu />}>
      {children}
    </SideMenuLayout>
  );
}

export default BoardLayout;

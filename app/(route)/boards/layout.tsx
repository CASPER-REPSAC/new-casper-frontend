import { ReactNode } from 'react';
import { SideMenuLayout } from '@app/_components/layout';
import BoardMenu from '@app/_components/molecules/sideMenu/BoardMenu';
import { PAGE_TITLE } from '@app/_constants/label';

export const metadata = {
  title: 'Casper - Board',
};

interface Props {
  children: ReactNode;
}

function BoardLayout({ children }: Props) {
  return (
    <SideMenuLayout pageTitle={PAGE_TITLE.board} sideMenu={<BoardMenu />}>
      <div className="pb-[200px]">{children}</div>
    </SideMenuLayout>
  );
}

export default BoardLayout;

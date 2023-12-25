import { ReactNode } from 'react';
import { PAGE_TITLE } from '@app/_constants/label';
import { SideMenuLayout } from '@app/_components/layout';
import { MemberSideMenu } from '@app/_components/molecules';

interface Props {
  children: ReactNode;
}

function MemberLayout({ children }: Props) {
  return (
    <SideMenuLayout
      pageTitle={PAGE_TITLE.members}
      sideMenu={<MemberSideMenu />}
    >
      {children}
    </SideMenuLayout>
  );
}

export default MemberLayout;

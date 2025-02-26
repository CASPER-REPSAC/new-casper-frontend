import { ReactNode } from 'react';
import { SideMenuLayout } from '@app/_components/layout';
import { MemberMenu } from '@app/_components/molecules';
import { PAGE_TITLE } from '@app/_constants/label';

export const metadata = {
  title: 'Casper - Member',
};

interface Props {
  children: ReactNode;
}

function MemberLayout({ children }: Props) {
  return (
    <SideMenuLayout pageTitle={PAGE_TITLE.members} sideMenu={<MemberMenu />}>
      <div className="pb-[200px]">{children}</div>
    </SideMenuLayout>
  );
}

export default MemberLayout;

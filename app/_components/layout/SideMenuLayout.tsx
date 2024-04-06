import PageTitle from '@app/_components/molecules/PageTitle';
import { ReactNode } from 'react';

interface Props {
  pageTitle: string;
  children: ReactNode;
  sideMenu: ReactNode;
}

function SideMenuLayout({ pageTitle, children, sideMenu }: Props) {
  return (
    <>
      <PageTitle pageTitle={pageTitle} />
      <div className="common-center relative mt-10 flex w-full flex-col gap-10 lg:flex-row">
        {sideMenu}
        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </>
  );
}

export default SideMenuLayout;

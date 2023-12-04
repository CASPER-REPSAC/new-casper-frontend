import PageTitle from 'app/_components/molecules/PageTitle';
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
      <div className="common-center">
        <div className="flex w-full flex-col gap-10 lg:flex-row">
          {sideMenu}
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </>
  );
}

export default SideMenuLayout;

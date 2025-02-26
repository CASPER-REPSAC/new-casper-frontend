import { ReactNode } from 'react';
import PageTitle from '@app/_components/molecules/PageTitle';

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
        <nav className="min-w-32">{sideMenu}</nav>
        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </>
  );
}

export default SideMenuLayout;

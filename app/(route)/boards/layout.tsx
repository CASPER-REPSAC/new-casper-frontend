'use client';

import { ReactNode } from 'react';
import { PAGE_TITLE } from 'app/_constants/label';
import { BoardSideMenu, PageTitle } from 'app/_components/molecules';

interface Props {
  children: ReactNode;
}

function BoardLayout({ children }: Props) {
  return (
    <>
      <PageTitle pageTitle={PAGE_TITLE.board} />
      <div className="common-center">
        <div className="flex w-full flex-col gap-10 lg:flex-row">
          <BoardSideMenu />
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </>
  );
}

export default BoardLayout;

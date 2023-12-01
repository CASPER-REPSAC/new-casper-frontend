'use client';

import { ReactNode } from 'react';
import styled from 'styled-components';
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
        <Flex>
          <BoardSideMenu />
          <Main>{children}</Main>
        </Flex>
      </div>
    </>
  );
}

const Flex = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 40px;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    gap: 0px;
  }
`;
const Main = styled.main`
  flex: auto;
`;

export default BoardLayout;

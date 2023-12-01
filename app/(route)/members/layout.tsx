'use client';

import PageTitle from 'app/_components/molecules/PageTitle';
import MemberSideMenu from 'app/_components/molecules/sideMenu/MemberSideMenu';
import { ReactNode } from 'react';
import styled from 'styled-components';
import { PAGE_TITLE } from 'app/_constants/label';

interface Props {
  children: ReactNode;
}
function MemberLayout({ children }: Props) {
  return (
    <>
      <PageTitle pageTitle={PAGE_TITLE.members} />
      <div className="common-center">
        <Flex>
          <MemberSideMenu />
          <Main>{children}</Main>
        </Flex>
      </div>
    </>
  );
}

const Flex = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  gap: 40px;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    gap: 0px;
  }
`;
const Main = styled.main`
  width: 100%;
`;

export default MemberLayout;

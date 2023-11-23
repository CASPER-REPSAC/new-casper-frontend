import { ReactNode } from 'react';
import styled from 'styled-components';
import CommonCenterWrapper from '@src/components/common/centerWrapper/CommonCenterWrapper';
import PageTitle from '@src/components/molecules/PageTitle';
import { PAGE_TITLE } from '@src/constants/label';
import { BoardSideMenu } from '@src/components/molecules/sideMenu';

interface Props {
  children: ReactNode;
}

function BoardLayout({ children }: Props) {
  return (
    <>
      <PageTitle pageTitle={PAGE_TITLE.board} />
      <CommonCenterWrapper>
        <Flex>
          <BoardSideMenu />
          <Main>{children}</Main>
        </Flex>
      </CommonCenterWrapper>
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

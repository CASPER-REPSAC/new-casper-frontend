import { ReactNode } from 'react';
import styled from 'styled-components';
import CommonCenterWrapper from '@src/components/common/CommonCenterWrapper';
import PageTitle from '@src/components/common/PageTitle';
import BoardSideMenu from '@src/components/organism/sideMenu/BoardSideMenu';
import { PAGE_TITLE } from '@src/constants/label';
import DefaultLayout from '../DefaultLayout';

interface Props {
  children: ReactNode;
}

function BoardLayout({ children }: Props) {
  return (
    <DefaultLayout>
      <PageTitle pageTitle={PAGE_TITLE.board} />
      <CommonCenterWrapper>
        <Flex>
          <BoardSideMenu />
          <Main>{children}</Main>
        </Flex>
      </CommonCenterWrapper>
    </DefaultLayout>
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
  overflow: hidden;
`;

export default BoardLayout;

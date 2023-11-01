import CommonCenterWrapper from '@src/components/common/CommonCenterWrapper';
import Footer from '@src/components/organism/Footer';
import PageTitle from '@src/components/common/PageTitle';
import BoardSideMenu from '@src/components/organism/BoardSideMenu';
import Header from '@src/components/organism/Header';
import { ReactNode } from 'react';
import styled from 'styled-components';
import { PAGE_TITLE } from '@src/utils/constants';

interface Props {
  children: ReactNode;
}
function BoardLayout({ children }: Props) {
  return (
    <>
      <Header />
      <PageTitle pageTitle={PAGE_TITLE.board} />
      <CommonCenterWrapper>
        <Flex>
          <BoardSideMenu />
          <Main>{children}</Main>
        </Flex>
      </CommonCenterWrapper>
      <Footer />
    </>
  );
}

const Flex = styled.div`
  display: flex;
  width: 100%;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;
const Main = styled.main`
  width: 100%;
`;

export default BoardLayout;

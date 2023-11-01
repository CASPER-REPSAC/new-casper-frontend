import CommonCenterWrapper from '@src/components/common/CommonCenterWrapper';
import Footer from '@src/components/organism/Footer';
import PageTitle from '@src/components/common/PageTitle';
import MemberSideMenu from '@src/components/organism/sideMenu/MemberSideMenu';
import Header from '@src/components/organism/Header';
import { ReactNode } from 'react';
import styled from 'styled-components';
import { PAGE_TITLE } from '@src/utils/constants';

interface Props {
  children: ReactNode;
}
function MemberLayout({ children }: Props) {
  return (
    <>
      <Header />
      <PageTitle pageTitle={PAGE_TITLE.members} />
      <CommonCenterWrapper>
        <Flex>
          <MemberSideMenu />
          <Main>{children}</Main>
        </Flex>
      </CommonCenterWrapper>
      <Footer />
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

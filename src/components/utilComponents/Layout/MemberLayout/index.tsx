import CommonCenterWrapper from '@src/components/common/CommonCenterWrapper';
import PageTitle from '@src/components/common/PageTitle';
import MemberSideMenu from '@src/components/organism/sideMenu/MemberSideMenu';
import { ReactNode } from 'react';
import styled from 'styled-components';
import { PAGE_TITLE } from '@src/constants/label';

interface Props {
  children: ReactNode;
}
function MemberLayout({ children }: Props) {
  return (
    <>
      <PageTitle pageTitle={PAGE_TITLE.members} />
      <CommonCenterWrapper>
        <Flex>
          <MemberSideMenu />
          <Main>{children}</Main>
        </Flex>
      </CommonCenterWrapper>
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

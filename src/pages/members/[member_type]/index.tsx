import styled from 'styled-components';
import SideBar from '@src/components/common/SideBar';
import PageTitle from '@src/components/common/PageTitle';
import CommonCenterWrapper from '@src/components/common/Layout/CommonCenterWrapper';
import { PAGE_TITLE } from '@src/utils/constants';
import PATH from '@src/utils/urls';

function Members() {
  return (
    <>
      <PageTitle pageTitle={PAGE_TITLE.members} />
      <CommonCenterWrapper>
        <SideBar menus={PATH.members} />
        <Main>
          <Cards>
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
          </Cards>
        </Main>
      </CommonCenterWrapper>
    </>
  );
}

const Main = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Cards = styled.div`
  margin-left: 30px;
  margin-right: 30px;
  height: 23vw;
  width: 100%;
  display: grid;
  gap: 3px;
  grid-template-columns: repeat(6, 1fr);
  box-sizing: border-box;
`;
const MemberCard = styled.div`
  transform: skewX(-18deg);
  height: 100%;
  width: 100%;

  background-color: ${({ theme }) => theme.surfaceAlt};
  opacity: 0.4;
  margin: 0;
`;

export default Members;

import SideBar from '@src/components/Layout/SideBar';
import PageTitle from '@src/components/Layout/PageTitle';
import { useRouter } from 'next/router';
import CommonCenterWrapper from '@src/components/Layout/CommonCenterWrapper/CommonCenterWrapper';
import { Cards, Main, MemberCard } from './members.style';
import { PATH } from '@src/utils/urls';

function Members() {
  const router = useRouter();

  return (
    <>
      <PageTitle pageTitle="Members" />
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

export default Members;

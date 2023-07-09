import SideBar from '@src/components/Layout/SideBar/SideBar';
import PageTitle from '@src/components/Layout/PageTitle/PageTitle';
import { useRouter } from 'next/router';
import CommonCenterWrapper from '@src/components/Layout/CommonCenterWrapper/CommonCenterWrapper';
import { Cards, Main, MemberCard } from './members.style';

function Members() {
  const router = useRouter();

  return (
    <>
      <PageTitle pageTitle="Members" />
      <CommonCenterWrapper>
        <SideBar menus={['활동 중', '휴학생', '졸업생']} basePath="/members" />
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

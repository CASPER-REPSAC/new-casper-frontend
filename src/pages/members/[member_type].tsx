import SideBar from '@src/components/Layout/SideBar/SideBar';
import PageTitle from '@src/components/Layout/PageTitle/PageTitle';
import { useRouter } from 'next/router';
import CommonCenterWrapper from '@src/components/Layout/CommonCenterWrapper/CommonCenterWrapper';
import { Cards, Main, MemberCard } from './members.style';

function Members() {
  const router = useRouter();

  const sideBarParam = {
    '활동 중': '/members/active',
    휴학생: '/members/rest',
    졸업생: '/members/graduate',
  };
  return (
    <>
      <PageTitle pageTitle="Members" />
      <CommonCenterWrapper>
        <SideBar menu_path={sideBarParam} />
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

import PageTitle from '@src/components/common/PageTitle';
import CommonCenterWrapper from '@src/components/common/CommonCenterWrapper';
import { PAGE_TITLE } from '@src/utils/constants';
import MembersSection from '@src/components/templates/members/MembersSection';
import MemberSideMenu from '@src/components/organism/MemberSideMenu';

function Members() {
  return (
    <>
      <PageTitle pageTitle={PAGE_TITLE.members} />
      <CommonCenterWrapper>
        <MemberSideMenu />
        <MembersSection />
      </CommonCenterWrapper>
    </>
  );
}

export default Members;

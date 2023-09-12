import SideBar from '@src/components/common/SideMenu';
import PageTitle from '@src/components/common/PageTitle';
import CommonCenterWrapper from '@src/components/common/Layout/CommonCenterWrapper';
import { PAGE_TITLE } from '@src/utils/constants';
import { PATH } from '@src/utils/urls';
import MembersSection from '@src/components/templates/members/MembersSection';

function Members() {
  return (
    <>
      <PageTitle pageTitle={PAGE_TITLE.members} />
      <CommonCenterWrapper>
        <SideBar menus={PATH.members} />
        <MembersSection />
      </CommonCenterWrapper>
    </>
  );
}

export default Members;

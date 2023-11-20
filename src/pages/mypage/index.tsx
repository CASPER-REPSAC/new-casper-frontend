/* eslint-disable react/jsx-props-no-spreading */
import PageTitle from '@src/components/organism/PageTitle';
import CommonCenterWrapper from '@src/components/common/centerWrapper/CommonCenterWrapper';
import ProfileForm from '@src/components/templates/mypage/ProfileForm';

function MyPage() {
  return (
    <>
      <PageTitle pageTitle="MyPage" />
      <CommonCenterWrapper>
        <ProfileForm />
      </CommonCenterWrapper>
    </>
  );
}

export default MyPage;

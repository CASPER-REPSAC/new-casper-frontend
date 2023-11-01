/* eslint-disable react/jsx-props-no-spreading */
import PageTitle from '@src/components/common/PageTitle';
import CommonCenterWrapper from '@src/components/common/CommonCenterWrapper';
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

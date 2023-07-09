import PageTitle from '@src/components/Layout/PageTitle/PageTitle';
import SideBar from '@src/components/Layout/SideBar/SideBar';
import CommonCenterWrapper from '@src/components/Layout/CommonCenterWrapper/CommonCenterWrapper';

export default function Year() {
  return (
    <>
      <PageTitle pageTitle="Album"></PageTitle>
      <CommonCenterWrapper>
        <SideBar menus={['2023', '2022', '2021']} basePath="/album" />
      </CommonCenterWrapper>
    </>
  );
}

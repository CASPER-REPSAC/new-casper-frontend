import PageTitle from '@src/components/Layout/PageTitle/PageTitle';
import PageWrapper from '@src/components/Layout/PageWrapper/PageWrapper';
import SideBar from '@src/components/Layout/SideBar/SideBar';

export default function Year() {
  return (
    <PageWrapper>
      <PageTitle pageTitle="Album"></PageTitle>
      <SideBar menus={['2023', '2022', '2021']} basePath="/album" />
    </PageWrapper>
  );
}

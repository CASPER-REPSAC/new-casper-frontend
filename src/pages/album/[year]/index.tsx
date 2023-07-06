import PageTitle from '@src/components/layout/PageTitle/PageTitle';
import PageWrapper from '@src/components/layout/PageWrapper/PageWrapper';
import SideBar from '@src/components/layout/SideBar/SideBar';

export default function Year() {
  return (
    <PageWrapper>
      <PageTitle pageTitle="Album"></PageTitle>
      <SideBar menus={['2023', '2022', '2021']} basePath="/album" />
    </PageWrapper>
  );
}

import { ReactNode } from 'react';
import { styled } from 'styled-components';
import Header from '../../../../app/_components/Header';
import AdminSideMenu from '../../molecules/sideMenu/AdminSideMenu';

interface Props {
  children: ReactNode;
}
function AdminLayout({ children }: Props) {
  return (
    <>
      <Header />
      <AdminPageWrapper>
        <AdminSideMenu />
        {children}
      </AdminPageWrapper>
    </>
  );
}

const AdminPageWrapper = styled.div`
  display: flex;
`;

export default AdminLayout;

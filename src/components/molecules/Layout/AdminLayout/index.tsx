import Header from '@src/components/common/Layout/Header';
import AdminSideMenu from '@src/components/pages/admin/AdminSideMenu';
import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface Props {
  children: ReactNode;
}
function AdminLayout({ children }: Props) {
  console.log('admin Layout');
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

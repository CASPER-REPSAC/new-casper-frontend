import AdminSideMenu from '@src/components/organism/AdminSideMenu';
import Header from '@src/components/organism/Header';
import { ReactNode } from 'react';
import { styled } from 'styled-components';

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

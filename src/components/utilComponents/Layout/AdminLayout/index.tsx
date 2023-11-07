import BarNavigation from '@src/components/organism/Header';
import AdminSideMenu from '@src/components/organism/sideMenu/AdminSideMenu';
import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface Props {
  children: ReactNode;
}
function AdminLayout({ children }: Props) {
  return (
    <>
      <BarNavigation />
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

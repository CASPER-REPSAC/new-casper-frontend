import BannerMenu from '@src/components/molecules/AdminSideMenu/BannerMenu';
import BoardMenu from '@src/components/molecules/AdminSideMenu/BoardMenu';
import DashboardMenu from '@src/components/molecules/AdminSideMenu/DashboardMenu';
import FileMenu from '@src/components/molecules/AdminSideMenu/FileMenu';
import UserMenu from '@src/components/molecules/AdminSideMenu/UserMenu';
import { styled } from 'styled-components';

function AdminSideMenu() {
  return (
    <Wrapper>
      <DashboardMenu />
      <UserMenu />
      <BoardMenu />
      <FileMenu />
      <BannerMenu />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 260px;
  height: calc(100vh - 70px);
  overflow: scroll;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.borderDefault};
`;

export default AdminSideMenu;
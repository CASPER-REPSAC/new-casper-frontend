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
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 260px;
  height: 100vh;
  background-color: ${({ theme }) => theme.surfaceAlt};
  overflow: scroll;
  flex-direction: column;
`;

export default AdminSideMenu;

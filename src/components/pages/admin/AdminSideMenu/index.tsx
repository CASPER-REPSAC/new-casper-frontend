import DashboardMenu from '@src/components/molecules/AdminSideMenu/DashboardMenu';
import UserMenu from '@src/components/molecules/AdminSideMenu/UserMenu';
import { styled } from 'styled-components';

function AdminSideMenu() {
  return (
    <Wrapper>
      <DashboardMenu />
      <UserMenu />
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

import { memo } from 'react';
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
  float: left;
  width: 260px;
  height: auto;
  overflow: inherit;

  border-right: 1px solid ${({ theme }) => theme.borderDefault};
`;

export default memo(AdminSideMenu);

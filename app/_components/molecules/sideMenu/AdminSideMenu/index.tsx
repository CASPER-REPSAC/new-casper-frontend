import { memo } from 'react';
import { styled } from 'styled-components';
import { BannerMenu, DashboardMenu, FileMenu, UserMenu } from './common';

function AdminSideMenu() {
  return (
    <Wrapper>
      <DashboardMenu />
      <UserMenu />
      {/* <BoardMenu /> */}
      <FileMenu />
      <BannerMenu />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  float: left;
  width: 260px;
  height: auto;
  border-right: 1px solid ${({ theme }) => theme.borderDefault};
`;

export default memo(AdminSideMenu);

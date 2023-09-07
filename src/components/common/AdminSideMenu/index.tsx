import { styled } from 'styled-components';
import Menu from './Menu';

function AdminSideMenu() {
  return (
    <Wrapper>
      <Menu>
        <Menu.Title>대시보드</Menu.Title>
        <Menu.SubMenuList>
          <Menu.SubMenu>test</Menu.SubMenu>
        </Menu.SubMenuList>
      </Menu>
      <Menu>
        <Menu.Title>사용자</Menu.Title>
        <Menu.SubMenuList>
          <Menu.SubMenu>test</Menu.SubMenu>
        </Menu.SubMenuList>
      </Menu>
      <Menu>
        <Menu.Title>게시판</Menu.Title>
        <Menu.SubMenuList>
          <Menu.SubMenu>test</Menu.SubMenu>
        </Menu.SubMenuList>
      </Menu>
      <Menu>
        <Menu.Title>파일</Menu.Title>
        <Menu.SubMenuList>
          <Menu.SubMenu>test</Menu.SubMenu>
        </Menu.SubMenuList>
      </Menu>
      <Menu>
        <Menu.Title>배너</Menu.Title>
        <Menu.SubMenuList>
          <Menu.SubMenu>test</Menu.SubMenu>
        </Menu.SubMenuList>
      </Menu>
      <Menu>
        <Menu.Title>메뉴</Menu.Title>
        <Menu.SubMenuList>
          <Menu.SubMenu>test</Menu.SubMenu>
        </Menu.SubMenuList>
      </Menu>
    </Wrapper>
  );
}

export default AdminSideMenu;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 260px;
  height: 100vh;
  background-color: ${({ theme }) => theme.surfaceAlt};
  overflow: scroll;
  // justify-content:center;
  flex-direction: column;
`;

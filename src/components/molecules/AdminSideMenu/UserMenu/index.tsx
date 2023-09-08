import Menu from '@src/components/common/AdminSideMenu';
import useRedirect from '@src/hooks/useRedirect';
import { ADMIN_PATH } from '@src/utils/urls';
import { useState } from 'react';

function UserMenu() {
  const [open, setOpen] = useState(false);
  const redirect = useRedirect();
  const { log, list, authority } = ADMIN_PATH.users;
  const toggle = () => {
    setOpen((cur) => !cur);
  };

  return (
    <Menu>
      <Menu.Title onClick={toggle}>사용자</Menu.Title>
      {open && (
        <Menu.SubMenuList>
          <Menu.SubMenu onClick={redirect(log.url)}>로그</Menu.SubMenu>
          <Menu.SubMenu onClick={redirect(list.url)}>사용자 목록</Menu.SubMenu>
          <Menu.SubMenu onClick={redirect(authority.url)}>
            권한 관리
          </Menu.SubMenu>
        </Menu.SubMenuList>
      )}
    </Menu>
  );
}

export default UserMenu;

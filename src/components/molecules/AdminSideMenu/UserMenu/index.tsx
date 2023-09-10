import AdminSideMenu from '@src/components/common/AdminSideMenu';
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
    <AdminSideMenu>
      <AdminSideMenu.Title onClick={toggle}>사용자</AdminSideMenu.Title>
      {open && (
        <AdminSideMenu.SubMenuList>
          <AdminSideMenu.SubMenu onClick={redirect(`${log.url}/1`)}>
            로그
          </AdminSideMenu.SubMenu>
          <AdminSideMenu.SubMenu onClick={redirect(list.url)}>
            사용자 목록
          </AdminSideMenu.SubMenu>
          <AdminSideMenu.SubMenu onClick={redirect(authority.url)}>
            권한 관리
          </AdminSideMenu.SubMenu>
        </AdminSideMenu.SubMenuList>
      )}
    </AdminSideMenu>
  );
}

export default UserMenu;

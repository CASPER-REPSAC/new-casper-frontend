import AdminSideMenu from '@src/components/molecules/sideMenu/AdminSideMenu/common/common/AdminSideMenu';
import useHighlight from 'app/_hooks/useHighlight';
import useRedirect from 'app/_hooks/useRedirect';
import { ADMIN_PATH } from 'app/_constants/urls';
import { useState } from 'react';

function UserMenu() {
  const {
    name: title,
    url: baseUrl,
    children: { log, list, authority },
  } = ADMIN_PATH.users;

  const [open, setOpen] = useState(false);
  const highlight = useHighlight(baseUrl);
  const logHighlight = useHighlight(log.url);
  const listHighlight = useHighlight(list.url);
  const authorityHighlight = useHighlight(authority.url);
  const redirect = useRedirect();

  const toggle = () => {
    setOpen((cur) => !cur);
  };

  return (
    <AdminSideMenu highlight={highlight}>
      <AdminSideMenu.Title onClick={toggle}>{title}</AdminSideMenu.Title>
      {open && (
        <AdminSideMenu.SubMenuList>
          <AdminSideMenu.SubMenu
            $highlight={logHighlight}
            onClick={redirect(log.url)}
          >
            로그
          </AdminSideMenu.SubMenu>
          <AdminSideMenu.SubMenu
            $highlight={listHighlight}
            onClick={redirect(list.url)}
          >
            사용자 목록
          </AdminSideMenu.SubMenu>
          <AdminSideMenu.SubMenu
            $highlight={authorityHighlight}
            onClick={redirect(authority.url)}
          >
            권한 관리
          </AdminSideMenu.SubMenu>
        </AdminSideMenu.SubMenuList>
      )}
    </AdminSideMenu>
  );
}

export default UserMenu;

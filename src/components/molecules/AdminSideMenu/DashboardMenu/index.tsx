import Menu from '@src/components/common/AdminSideMenu';
import useRedirect from '@src/hooks/useRedirect';
import { ADMIN_PATH } from '@src/utils/urls';

function DashboardMenu() {
  const redirect = useRedirect();

  return (
    <Menu>
      <Menu.Title onClick={redirect(ADMIN_PATH.dashboard.url)}>
        {ADMIN_PATH.dashboard.name}
      </Menu.Title>
    </Menu>
  );
}

export default DashboardMenu;

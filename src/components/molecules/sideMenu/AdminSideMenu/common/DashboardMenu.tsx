import AdminSideMenu from '@src/components/molecules/sideMenu/AdminSideMenu/common/common/AdminSideMenu';
import useHighlight from 'app/_hooks/useHighlight';
import useRedirect from 'app/_hooks/useRedirect';
import { ADMIN_PATH } from 'app/_constants/urls';

function DashboardMenu() {
  const redirect = useRedirect();
  const { url, name } = ADMIN_PATH.dashboard;
  const highlight = useHighlight(url);

  return (
    <AdminSideMenu highlight={highlight}>
      <AdminSideMenu.Title onClick={redirect(url)}>{name}</AdminSideMenu.Title>
    </AdminSideMenu>
  );
}

export default DashboardMenu;

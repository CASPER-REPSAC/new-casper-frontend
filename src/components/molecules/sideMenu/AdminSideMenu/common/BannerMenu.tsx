import AdminSideMenu from '@src/components/molecules/sideMenu/AdminSideMenu/common/common/AdminSideMenu';
import useHighlight from '@src/hooks/useHighlight';
import useRedirect from '@src/hooks/useRedirect';
import { ADMIN_PATH } from '@src/constants/urls';

function BannerMenu() {
  const redirect = useRedirect();
  const { url, name } = ADMIN_PATH.banner;
  const highlight = useHighlight(url);

  return (
    <AdminSideMenu highlight={highlight}>
      <AdminSideMenu.Title onClick={redirect(url)}>{name}</AdminSideMenu.Title>
    </AdminSideMenu>
  );
}

export default BannerMenu;

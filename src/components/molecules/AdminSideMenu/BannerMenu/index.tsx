import Menu from '@src/components/common/AdminSideMenu';
import useRedirect from '@src/hooks/useRedirect';
import { ADMIN_PATH } from '@src/utils/urls';

function BannerMenu() {
  const redirect = useRedirect();
  return (
    <Menu>
      <Menu.Title onClick={redirect(ADMIN_PATH.banner.url)}>
        {ADMIN_PATH.banner.name}
      </Menu.Title>
    </Menu>
  );
}

export default BannerMenu;

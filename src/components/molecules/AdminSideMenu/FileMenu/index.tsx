import AdminSideMenu from '@src/components/common/AdminSideMenu';
import useRedirect from '@src/hooks/useRedirect';
import { ADMIN_PATH } from '@src/utils/urls';

function FileMenu() {
  const redirect = useRedirect();
  return (
    <AdminSideMenu>
      <AdminSideMenu.Title onClick={redirect(ADMIN_PATH.files.url)}>
        {ADMIN_PATH.files.name}
      </AdminSideMenu.Title>
    </AdminSideMenu>
  );
}

export default FileMenu;

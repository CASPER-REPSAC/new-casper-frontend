import AdminSideMenu from '@src/components/common/AdminSideMenu';
import useHighlight from '@src/hooks/useHighlight';
import useRedirect from '@src/hooks/useRedirect';
import { ADMIN_PATH } from '@src/constants/urls';

function FileMenu() {
  const { url, name } = ADMIN_PATH.files;

  const redirect = useRedirect();
  const highlight = useHighlight(url);

  return (
    <AdminSideMenu highlight={highlight}>
      <AdminSideMenu.Title onClick={redirect(ADMIN_PATH.files.url)}>
        {name}
      </AdminSideMenu.Title>
    </AdminSideMenu>
  );
}

export default FileMenu;

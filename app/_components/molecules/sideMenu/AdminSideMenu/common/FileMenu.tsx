import AdminSideMenu from 'app/_components/molecules/sideMenu/AdminSideMenu/common/common/AdminSideMenu';
import useHighlight from 'app/_hooks/useHighlight';
import useRedirect from 'app/_hooks/useRedirect';
import { ADMIN_PATH } from 'app/_constants/urls';

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

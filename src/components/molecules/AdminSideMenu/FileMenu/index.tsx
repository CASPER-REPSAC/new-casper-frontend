import Menu from '@src/components/common/AdminSideMenu';
import useRedirect from '@src/hooks/useRedirect';
import { ADMIN_PATH } from '@src/utils/urls';

function FileMenu() {
  const redirect = useRedirect();
  return (
    <Menu>
      <Menu.Title onClick={redirect(ADMIN_PATH.files.url)}>파일</Menu.Title>
    </Menu>
  );
}

export default FileMenu;

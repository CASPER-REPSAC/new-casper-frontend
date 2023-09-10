import AdminSideMenu from '@src/components/common/AdminSideMenu';
import useRedirect from '@src/hooks/useRedirect';
import { ADMIN_PATH } from '@src/utils/urls';
import { useState } from 'react';

function BoardMenu() {
  const [open, setOpen] = useState(false);
  const redirect = useRedirect();
  const { boards, posts, comments } = ADMIN_PATH.boards;
  const toggle = () => {
    setOpen((cur) => !cur);
  };

  return (
    <AdminSideMenu>
      <AdminSideMenu.Title onClick={toggle}>게시판</AdminSideMenu.Title>
      {open && (
        <AdminSideMenu.SubMenuList>
          <AdminSideMenu.SubMenu onClick={redirect(boards.url)}>
            {boards.name}
          </AdminSideMenu.SubMenu>
          <AdminSideMenu.SubMenu onClick={redirect(posts.url)}>
            {posts.name}
          </AdminSideMenu.SubMenu>
          <AdminSideMenu.SubMenu onClick={redirect(comments.url)}>
            {comments.name}
          </AdminSideMenu.SubMenu>
        </AdminSideMenu.SubMenuList>
      )}
    </AdminSideMenu>
  );
}

export default BoardMenu;

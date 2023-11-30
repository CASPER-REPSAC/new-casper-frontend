import AdminSideMenu from '@src/components/molecules/sideMenu/AdminSideMenu/common/common/AdminSideMenu';
import useHighlight from 'app/_hooks/useHighlight';
import useRedirect from 'app/_hooks/useRedirect';
import { ADMIN_PATH } from 'app/_constants/urls';
import { useState } from 'react';

function BoardMenu() {
  const {
    name: title,
    url: baseUrl,
    children: { boards, posts, comments },
  } = ADMIN_PATH.boards;

  const [open, setOpen] = useState(false);
  const redirect = useRedirect();
  const highlight = useHighlight(baseUrl);
  const boardsHighlight = useHighlight(boards.url);
  const postsHighlight = useHighlight(posts.url);
  const commentsHighlight = useHighlight(comments.url);

  const openToggle = () => {
    setOpen((cur) => !cur);
  };

  return (
    <AdminSideMenu highlight={highlight}>
      <AdminSideMenu.Title onClick={openToggle}>{title}</AdminSideMenu.Title>
      {open && (
        <AdminSideMenu.SubMenuList>
          <AdminSideMenu.SubMenu
            $highlight={boardsHighlight}
            onClick={redirect(boards.url)}
          >
            {boards.name}
          </AdminSideMenu.SubMenu>
          <AdminSideMenu.SubMenu
            $highlight={postsHighlight}
            onClick={redirect(posts.url)}
          >
            {posts.name}
          </AdminSideMenu.SubMenu>
          <AdminSideMenu.SubMenu
            $highlight={commentsHighlight}
            onClick={redirect(comments.url)}
          >
            {comments.name}
          </AdminSideMenu.SubMenu>
        </AdminSideMenu.SubMenuList>
      )}
    </AdminSideMenu>
  );
}

export default BoardMenu;

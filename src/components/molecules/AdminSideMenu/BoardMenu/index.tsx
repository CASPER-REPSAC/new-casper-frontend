import Menu from '@src/components/common/AdminSideMenu';
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
    <Menu>
      <Menu.Title onClick={toggle}>게시판</Menu.Title>
      {open && (
        <Menu.SubMenuList>
          <Menu.SubMenu onClick={redirect(boards.url)}>
            {boards.name}
          </Menu.SubMenu>
          <Menu.SubMenu onClick={redirect(posts.url)}>
            {posts.name}
          </Menu.SubMenu>
          <Menu.SubMenu onClick={redirect(comments.url)}>
            {comments.name}
          </Menu.SubMenu>
        </Menu.SubMenuList>
      )}
    </Menu>
  );
}

export default BoardMenu;

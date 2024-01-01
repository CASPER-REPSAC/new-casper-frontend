import { memo } from 'react';
import { usePathname } from 'next/navigation';
import { PATH } from '@app/_constants/urls';
import { SideMenuLink, SideMenuWrapper } from './common';

function BoardSideMenu() {
  const pathname = usePathname();
  const { notice, full, associate, graduate } = PATH.boards;

  return (
    <SideMenuWrapper>
      <SideMenuLink
        href={`${notice.url}/list/1`}
        name={notice.name}
        highlight={pathname.startsWith(PATH.boards.notice.url)}
      />
      <SideMenuLink
        href={`${full.url}/list/1`}
        name={full.name}
        highlight={pathname.startsWith(PATH.boards.full.url)}
      />
      <SideMenuLink
        href={`${associate.url}/list/1`}
        name={associate.name}
        highlight={pathname.startsWith(PATH.boards.associate.url)}
      />
      <SideMenuLink
        href={`${graduate.url}/list/1`}
        name={graduate.name}
        highlight={pathname.startsWith(PATH.boards.graduate.url)}
      />
    </SideMenuWrapper>
  );
}

export default memo(BoardSideMenu);

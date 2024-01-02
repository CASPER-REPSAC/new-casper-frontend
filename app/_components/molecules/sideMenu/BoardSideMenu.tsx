import { memo } from 'react';
import { useRecoilValue } from 'recoil';
import { usePathname } from 'next/navigation';
import { PATH } from '@app/_constants/urls';
import { roleState } from '@app/_store/permissionAtoms';
import { SideMenuLink, SideMenuWrapper } from './common';

function BoardSideMenu() {
  const role = useRecoilValue(roleState);
  const pathname = usePathname();
  const { notice, full, associate, graduate, free } = PATH.boards;

  return (
    <SideMenuWrapper>
      <SideMenuLink
        href={`${notice.url}/list/1`}
        name={notice.name}
        highlight={pathname.startsWith(PATH.boards.notice.url)}
      />

      {(role === 'admin' || role === 'full') && (
        <SideMenuLink
          href={`${full.url}/list/1`}
          name={full.name}
          highlight={pathname.startsWith(PATH.boards.full.url)}
        />
      )}

      {(role === 'admin' || role === 'full' || role === 'associate') && (
        <SideMenuLink
          href={`${associate.url}/list/1`}
          name={associate.name}
          highlight={pathname.startsWith(PATH.boards.associate.url)}
        />
      )}

      {(role === 'admin' || role === 'full') && (
        <SideMenuLink
          href={`${graduate.url}/list/1`}
          name={graduate.name}
          highlight={pathname.startsWith(PATH.boards.graduate.url)}
        />
      )}

      <SideMenuLink
        href={`${free.url}/list/1`}
        name={free.name}
        highlight={pathname.startsWith(PATH.boards.free.url)}
      />
    </SideMenuWrapper>
  );
}

export default memo(BoardSideMenu);

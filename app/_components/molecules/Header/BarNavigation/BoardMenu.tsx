import { DefaultLink } from '@app/_components/common';
import { PATH } from '@app/_constants/urls';
import { usePathname } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import { roleState } from '@app/_store/permissionAtoms';
import BarNavMenu from './common/BarNavMenu';

function BoardMenu() {
  const pathname = usePathname();
  const role = useRecoilValue(roleState);

  return (
    <BarNavMenu
      highlight={pathname.startsWith('/boards')}
      title={
        <DefaultLink className="w-full" href={PATH.boards.notice.url}>
          Boards
        </DefaultLink>
      }
      subMenus={
        <>
          <DefaultLink className="w-full" href={PATH.boards.notice.url}>
            {PATH.boards.notice.name}
          </DefaultLink>
          {(role === '관리자' || role === '정회원') && (
            <DefaultLink className="w-full" href={PATH.boards.full.url}>
              {PATH.boards.full.name}
            </DefaultLink>
          )}
          {(role === '관리자' || role === '정회원' || role === '준회원') && (
            <DefaultLink className="w-full" href={PATH.boards.associate.url}>
              {PATH.boards.associate.name}
            </DefaultLink>
          )}
          {(role === '관리자' || role === '정회원') && (
            <DefaultLink className="w-full" href={PATH.boards.graduate.url}>
              {PATH.boards.graduate.name}
            </DefaultLink>
          )}
          <DefaultLink className="w-full" href={PATH.boards.free.url}>
            {PATH.boards.free.name}
          </DefaultLink>
        </>
      }
    />
  );
}

export default BoardMenu;

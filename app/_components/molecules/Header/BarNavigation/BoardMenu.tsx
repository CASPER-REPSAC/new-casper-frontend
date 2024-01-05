import { DefaultLink } from '@app/_components/common';
import { PATH } from '@app/_constants/urls';
import { usePathname } from 'next/navigation';
import BarNavMenu from './common/BarNavMenu';
import BoardsSubMenus from '../common/BoardsSubMenus';

function BoardMenu() {
  const pathname = usePathname();

  return (
    <BarNavMenu
      highlight={pathname.startsWith('/boards')}
      title={
        <DefaultLink className="w-full" href={PATH.boards.notice.url}>
          Boards
        </DefaultLink>
      }
      subMenus={<BoardsSubMenus />}
    />
  );
}

export default BoardMenu;

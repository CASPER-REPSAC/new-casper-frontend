import { DefaultLink } from '@app/_components/common';
import { PATH } from '@app/_constants/urls';
import { usePathname } from 'next/navigation';
import BarNavMenu from './BarNavMenu';

function BoardMenu() {
  const pathname = usePathname();

  const boardSubMenus = Object.values(PATH.boards).map(({ name, url }) => (
    <DefaultLink key={name} className="w-full" href={url}>
      {name}
    </DefaultLink>
  ));

  return (
    <BarNavMenu
      title={
        <DefaultLink className="w-full" href={PATH.boards.notice.url}>
          Boards
        </DefaultLink>
      }
      subMenus={boardSubMenus}
      highlight={pathname.startsWith('/boards')}
    />
  );
}

export default BoardMenu;

import { DefaultLink } from '@app/_components/common';
import { PATH } from '@app/_constants/urls';
import { usePathname } from 'next/navigation';
import BarNavMenu from './BarNavMenu';

function MemberMenu() {
  const pathname = usePathname();

  const memberMenus = Object.values(PATH.members).map(({ name, url }) => (
    <DefaultLink key={name} className="w-full" href={url}>
      {name}
    </DefaultLink>
  ));

  return (
    <BarNavMenu
      title={
        <DefaultLink className="w-full" href={PATH.members.active.url}>
          Members
        </DefaultLink>
      }
      subMenus={memberMenus}
      highlight={pathname.startsWith('/members')}
    />
  );
}

export default MemberMenu;

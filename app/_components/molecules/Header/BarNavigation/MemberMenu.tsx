import { DefaultLink } from '@app/_components/common';
import { PATH } from '@app/_constants/urls';
import { usePathname } from 'next/navigation';
import BarNavMenu from './common/BarNavMenu';
import MemberSubMenus from '../common/MemberSubMenus';

function MemberMenu() {
  const pathname = usePathname();

  return (
    <BarNavMenu
      title={
        <DefaultLink className="w-full" href={PATH.members.active.url}>
          Members
        </DefaultLink>
      }
      subMenus={<MemberSubMenus />}
      highlight={pathname.startsWith('/members')}
    />
  );
}

export default MemberMenu;

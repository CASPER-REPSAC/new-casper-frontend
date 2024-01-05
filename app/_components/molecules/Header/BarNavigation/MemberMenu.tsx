import { DefaultLink } from '@app/_components/common';
import { PATH } from '@app/_constants/urls';
import { usePathname } from 'next/navigation';
import BarNavMenu from './common/BarNavMenu';

function MemberMenu() {
  const pathname = usePathname();

  const {
    members: { active, rest, graduate },
  } = PATH;

  return (
    <BarNavMenu
      title={
        <DefaultLink className="w-full" href={active.url}>
          Members
        </DefaultLink>
      }
      subMenus={
        <>
          <DefaultLink className="w-full" href={active.url}>
            {active.name}
          </DefaultLink>
          <DefaultLink className="w-full" href={rest.url}>
            {rest.name}
          </DefaultLink>
          <DefaultLink className="w-full" href={graduate.url}>
            {graduate.name}
          </DefaultLink>
        </>
      }
      highlight={pathname.startsWith('/members')}
    />
  );
}

export default MemberMenu;

import { usePathname } from 'next/navigation';
import { PATH } from 'app/_constants/urls';
import { SideMenuLink, SideMenuWrapper } from './common';

function MemberSideMenu() {
  const pathname = usePathname();
  const { active, rest, graduate } = PATH.members;

  if (!pathname) return <></>;

  return (
    <SideMenuWrapper>
      <SideMenuLink
        href={active.url}
        name={active.name}
        highlight={pathname.startsWith(active.url)}
      />
      <SideMenuLink
        href={rest.url}
        name={rest.name}
        highlight={pathname.startsWith(rest.url)}
      />
      <SideMenuLink
        href={graduate.url}
        name={graduate.name}
        highlight={pathname.startsWith(graduate.url)}
      />
    </SideMenuWrapper>
  );
}

export default MemberSideMenu;

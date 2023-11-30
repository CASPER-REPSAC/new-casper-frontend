import { useRouter } from 'next/router';
import { PATH } from 'app/_constants/urls';
import { SideMenuLink, SideMenuWrapper } from './common';

function MemberSideMenu() {
  const { asPath } = useRouter();
  const { active, rest, graduate } = PATH.members;

  return (
    <SideMenuWrapper>
      <SideMenuLink
        href={active.url}
        name={active.name}
        highlight={asPath.startsWith(active.url)}
      />
      <SideMenuLink
        href={rest.url}
        name={rest.name}
        highlight={asPath.startsWith(rest.url)}
      />
      <SideMenuLink
        href={graduate.url}
        name={graduate.name}
        highlight={asPath.startsWith(graduate.url)}
      />
    </SideMenuWrapper>
  );
}

export default MemberSideMenu;

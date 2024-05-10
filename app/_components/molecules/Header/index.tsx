'use client';

import { CasperLogo } from '@app/_components/common';
import {
  Avatar,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Tooltip,
} from '@nextui-org/react';
import { usePathname } from 'next/navigation';
import { PATH } from '@app/_constants/urls';
import { BOARD_TABS, MEMBER_TABS } from '@app/_constants/menu';
import { useRecoilValue } from 'recoil';
import { Button } from '@app/_shadcn/components/ui/button';
import {
  loginState,
  myProfileState,
  roleState,
} from '@app/_store/permissionAtoms';
import UserMenu from '../sideMenu/UserMenu';
import DarkModeSwitch from './DarkModeSwitch';
import NavSection from './NavSection';

function Header() {
  const pathname = usePathname();
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const role = useRecoilValue(roleState);
  const isLoggedIn = useRecoilValue(loginState);
  const myProfile = useRecoilValue(myProfileState);

  return (
    <Navbar>
      <NavbarContent className="lg:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarBrand>
        <Link href={PATH.home.url}>
          <CasperLogo />
        </Link>
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem>
          <DarkModeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavSection />

      {isLoggedIn ? (
        <Tooltip content={<UserMenu />}>
          <Link href={PATH.user.mypage.url}>
            <Avatar src={myProfile?.image} />
          </Link>
        </Tooltip>
      ) : (
        <Button color="primary" asChild>
          <Link href={PATH.user.login.url}>Login</Link>
        </Button>
      )}

      <NavbarMenu>
        <h1 className="text-foreground-600 text-xl font-bold">Boards</h1>

        {BOARD_TABS.map(({ name, key, href, accessibleRoles, startWith }) => {
          if (!accessibleRoles.includes(role)) return null;
          return (
            <NavbarMenuItem key={key} isActive={pathname.startsWith(startWith)}>
              <Link className="w-full" href={href} size="lg">
                {name}
              </Link>
            </NavbarMenuItem>
          );
        })}
        <h1 className="text-foreground-600 text-xl font-bold">Members</h1>
        {MEMBER_TABS.map(({ key, href, name, startWith }) => (
          <NavbarMenuItem key={key} isActive={pathname.startsWith(startWith)}>
            <Link className="w-full" href={href} size="lg">
              {name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default Header;

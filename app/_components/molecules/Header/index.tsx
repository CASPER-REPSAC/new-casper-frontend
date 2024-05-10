'use client';

import { CasperLogo } from '@app/_components/common';
import {
  Avatar,
  Button,
  Divider,
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
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { PATH } from '@app/_constants/urls';
import { BOARD_TABS, MEMBER_TABS } from '@app/_constants/menu';
import { useRecoilValue } from 'recoil';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const role = useRecoilValue(roleState);
  const isLoggedIn = useRecoilValue(loginState);
  const myProfile = useRecoilValue(myProfileState);

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      classNames={{
        wrapper: 'p-0 common-center ',
        base: 'bg-inherit shadow',
        item: [
          'flex',
          'relative',
          'h-full',
          'items-center',
          "data-[active=true]:after:content-['']",
          'data-[active=true]:after:absolute',
          'data-[active=true]:after:bottom-0',
          'data-[active=true]:after:left-0',
          'data-[active=true]:after:right-0',
          'data-[active=true]:after:h-[2px]',
          'data-[active=true]:after:rounded-[2px]',
          'data-[active=true]:after:bg-primary',
        ],
      }}
    >
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

      <NavbarContent justify="end">
        {isLoggedIn ? (
          <NavbarItem>
            <Tooltip content={<UserMenu />}>
              <Link href={PATH.user.mypage.url}>
                <Avatar src={myProfile?.image} />
              </Link>
            </Tooltip>
          </NavbarItem>
        ) : (
          <NavbarItem>
            <Button color="primary" as={Link} href={PATH.user.login.url}>
              Login
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarMenu>
        <Divider />
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

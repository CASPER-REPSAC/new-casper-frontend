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
import { MoonIcon, SunIcon } from '@app/_components/icons';
import { useTheme } from '@app/_hooks';
import {
  loginState,
  myProfileState,
  roleState,
} from '@app/_store/permissionAtoms';
import MemberMenu from '../sideMenu/MemberMenu';
import BoardMenu from '../sideMenu/BoardMenu';
import UserMenu from '../sideMenu/UserMenu';

const MENU_ITEMS = [
  {
    tooltip: <MemberMenu variant="light" />,
    startWith: '/members',
    title: 'Members',
    href: PATH.members.active.url,
  },
  {
    tooltip: <BoardMenu variant="light" />,
    startWith: '/boards',
    title: 'Boards',
    href: `${PATH.boards.notice.url}/list/1`,
  },
];

function Header() {
  const { theme, setTheme } = useTheme();
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
      className="common-center "
      classNames={{
        wrapper: 'p-0',
        base: 'bg-inherit',
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
        <CasperLogo />
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem>
          {theme === 'light' ? (
            <Button
              onClick={() => {
                setTheme('dark');
              }}
              variant="light"
              color="default"
            >
              <SunIcon />
            </Button>
          ) : (
            <Button
              onClick={() => {
                setTheme('light');
              }}
              variant="light"
              color="default"
            >
              <MoonIcon />
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="hidden gap-8 lg:flex" justify="center">
        {MENU_ITEMS.map(({ startWith, title, tooltip, href }) => (
          <NavbarItem key={title} isActive={pathname.startsWith(startWith)}>
            <Tooltip content={tooltip}>
              <Link color="foreground" href={href}>
                {title}
              </Link>
            </Tooltip>
          </NavbarItem>
        ))}
      </NavbarContent>

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
        <h1 className="text-xl font-bold text-foreground-600">Boards</h1>

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
        <h1 className="text-xl font-bold text-foreground-600">Members</h1>
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

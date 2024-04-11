'use client';

import { Link, NavbarContent, NavbarItem, Tooltip } from '@nextui-org/react';
import { usePathname } from 'next/navigation';
import { ADMIN_PATH, PATH } from '@app/_constants/urls';
import MemberMenu from '../sideMenu/MemberMenu';
import BoardMenu from '../sideMenu/BoardMenu';

const MENU_ITEMS = [
  {
    startWith: '/admin',
    title: 'Admin',
    href: `${ADMIN_PATH.home.url}`,
  },
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

function NavSection() {
  const pathname = usePathname();

  return (
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
  );
}

export default NavSection;

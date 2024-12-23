'use client';

import {
  NavigationMenu,
  NavigationMenuList,
} from '@app/_shadcn/components/ui/navigation-menu';

import { ADMIN_PATH, NEW_PATH, PATH } from '@app/_constants/urls';
import { BOARD_TABS, INTRA_TABS, MEMBER_TABS } from '@app/_constants/menu';
import { useRecoilValue } from 'recoil';
import { roleState } from '@app/_store/permissionAtoms';
import { BOARD_TYPE } from '@app/_constants/mock';
import MenuItem from './ui/MenuItem';

const MENU_ITEMS = [
  {
    startWith: '/admin',
    title: 'Admin',
    href: `${ADMIN_PATH.user}`,
    desc: '관리자',
    accessibleRoles: ['관리자'],
  },
  {
    startWith: '/members',
    title: 'Members',
    href: PATH.members.active.url,
    tabs: MEMBER_TABS,
    desc: 'Casper 정회원 멤버들의 소개를 확인해보세요.',
    accessibleRoles: ['관리자', '정회원', '준회원', '손님'],
  },
  {
    startWith: '/boards',
    title: 'Boards',
    href: NEW_PATH.boardList.url({
      boardType: BOARD_TYPE.notice,
      page: 1,
      category: 'all',
    }),
    tabs: BOARD_TABS,
    desc: 'Casper 회원들의 소통을 위한 공간이에요.',
    accessibleRoles: ['관리자', '정회원', '준회원', '손님'],
  },
  {
    startWith: '/boards',
    title: 'Intra',
    tabs: INTRA_TABS,
    desc: 'Casper의 서비스를 이용해보세요.',
    accessibleRoles: ['관리자', '정회원'],
  },
];

function NavSection() {
  const role = useRecoilValue(roleState);

  return (
    <NavigationMenu className="hidden gap-8 lg:flex">
      <NavigationMenuList>
        {MENU_ITEMS.map(({ title, desc, tabs, href, accessibleRoles }) => {
          if (!accessibleRoles.includes(role)) return null;
          const subMenus = tabs?.filter((tab) => ({
            name: tab.name,
            href: tab.href,
            accessibleRoles: tab.accessibleRoles,
          }));
          return (
            <MenuItem
              key={title}
              title={title}
              desc={desc}
              subMenus={subMenus}
              href={href}
            />
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default NavSection;

'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@app/_shadcn/components/ui/navigation-menu';

import { ADMIN_PATH, NEW_PATH, PATH } from '@app/_constants/urls';
import { BOARD_TABS, INTRA_TABS, MEMBER_TABS } from '@app/_constants/menu';
import { Button } from '@app/_shadcn/components/ui/button';
import { useRecoilValue } from 'recoil';
import { roleState } from '@app/_store/permissionAtoms';
import Link from 'next/link';
import { BOARD_TYPE } from '@app/_constants/mock';

const MENU_ITEMS = [
  {
    title: 'Admin',
    href: `${ADMIN_PATH.user}`,
    accessibleRoles: ['관리자'],
  },
  {
    title: 'Members',
    href: PATH.members.active.url,
    tabs: MEMBER_TABS,
    desc: 'Casper 정회원 멤버들의 소개를 확인해보세요.',
    accessibleRoles: ['관리자', '정회원', '준회원', '손님'],
  },
  {
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
          return (
            <NavigationMenuItem key={title}>
              <NavigationMenuTrigger>
                {href ? <Link href={href}>{title}</Link> : <span>{title}</span>}
              </NavigationMenuTrigger>
              {tabs && (
                <NavigationMenuContent>
                  <div className="flex min-w-96 grid-cols-3 justify-between gap-2 px-8 py-4">
                    <div className=" flex w-full flex-col justify-center rounded bg-primary-foreground p-4">
                      <h1>{title}</h1>
                      <p className="text-sm font-thin">{desc}</p>
                    </div>
                    <div className="flex  flex-col gap-1">
                      {tabs.map(
                        ({
                          href: subHref,
                          name,
                          accessibleRoles: tabAccessibleRoles,
                        }) => {
                          if (!tabAccessibleRoles.includes(role)) return null;
                          return (
                            <Button
                              key={name}
                              asChild
                              size="sm"
                              variant="ghost"
                              className="text-left"
                            >
                              <Link href={subHref}>{name}</Link>
                            </Button>
                          );
                        },
                      )}
                    </div>
                  </div>
                </NavigationMenuContent>
              )}
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default NavSection;

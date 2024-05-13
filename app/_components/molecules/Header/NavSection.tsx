'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@app/_shadcn/components/ui/navigation-menu';

import { Link } from '@nextui-org/react';
import { ADMIN_PATH, PATH } from '@app/_constants/urls';
import { BOARD_TABS, MEMBER_TABS } from '@app/_constants/menu';
import { Button } from '@app/_shadcn/components/ui/button';
import { useRecoilValue } from 'recoil';
import { roleState } from '@app/_store/permissionAtoms';

const MENU_ITEMS = [
  {
    startWith: '/admin',
    title: 'Admin',
    href: `${ADMIN_PATH.home.url}`,
  },
  {
    startWith: '/members',
    title: 'Members',
    href: PATH.members.active.url,
    tabs: MEMBER_TABS,
    desc: 'Casper 정회원 멤버들의 소개를 확인해보세요.',
  },
  {
    startWith: '/boards',
    title: 'Boards',
    href: `${PATH.boards.notice.url}/list/1`,
    tabs: BOARD_TABS,
    desc: 'Casper 회원들의 소통을 위한 공간이에요.',
  },
];

function NavSection() {
  const role = useRecoilValue(roleState);

  return (
    <NavigationMenu className="hidden gap-8 lg:flex">
      <NavigationMenuList>
        {MENU_ITEMS.map(({ title, desc, tabs, href }) => (
          <NavigationMenuItem key={title}>
            <NavigationMenuTrigger>
              <Link href={href}>{title}</Link>
            </NavigationMenuTrigger>
            {tabs && (
              <NavigationMenuContent>
                <div className="flex min-w-96 grid-cols-3 justify-between gap-2 px-8 py-4">
                  <div className=" flex w-full flex-col justify-center rounded bg-primary-foreground p-4">
                    <h1>{title}</h1>
                    <p className="text-sm font-thin">{desc} </p>
                  </div>
                  <div className="flex  flex-col gap-1">
                    {tabs.map(
                      ({ key, href: subHref, name, accessibleRoles }) => {
                        if (!accessibleRoles.includes(role)) return null;
                        return (
                          <Button
                            key={key}
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
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default NavSection;

'use client';

import useMyInfo from '@app/_hooks/apis/user/useMyInfo';
import { MENU_ITEMS } from '@app/_constants/menu';
import {
  NavigationMenu,
  NavigationMenuList,
} from '@app/_shadcn/components/ui/navigation-menu';
import MenuItem from './ui/MenuItem';

function NavSection() {
  const { data: myProfile } = useMyInfo();
  const role = myProfile?.role || 'guest';

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

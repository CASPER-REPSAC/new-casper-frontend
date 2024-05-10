'use client';

import { BOARD_TABS, MEMBER_TABS } from '@app/_constants/menu';
import { SheetContent, SheetHeader } from '@app/_shadcn/components/ui/sheet';
import { roleState } from '@app/_store/permissionAtoms';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';

function SideNavSheet() {
  const role = useRecoilValue(roleState);

  return (
    <SheetContent side="left">
      <SheetHeader>
        <h1 className="text-foreground-600 text-xl font-bold">Boards</h1>
      </SheetHeader>

      {BOARD_TABS.map(({ name, key, href, accessibleRoles }) => {
        if (!accessibleRoles.includes(role)) return null;
        return (
          <Link key={key} className="w-full" href={href}>
            {name}
          </Link>
        );
      })}
      <h1 className="text-foreground-600 text-xl font-bold">Members</h1>
      {MEMBER_TABS.map(({ key, href, name }) => (
        <Link key={key} className="w-full" href={href}>
          {name}
        </Link>
      ))}
    </SheetContent>
  );
}

export default SideNavSheet;

'use client';

import { CasperLogo } from '@app/_components/common';
import { BOARD_TABS, MEMBER_TABS } from '@app/_constants/menu';
import { roleState } from '@app/_store/permissionAtoms';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { MenuIcon } from '@app/_components/icons';
import { Button } from '@app/_shadcn/components/ui/button';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
} from '@app/_shadcn/components/ui/sheet';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { PATH } from '@app/_constants/urls';

function MobileMenuSheet() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname, setOpen]);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="lg:hidden" variant="outline">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SideNavSheet />
    </Sheet>
  );
}

function SideNavSheet() {
  const role = useRecoilValue(roleState);

  return (
    <SheetContent side="left" className="flex flex-col">
      <SheetHeader>
        <Link href={PATH.home.url}>
          <CasperLogo />
        </Link>
      </SheetHeader>
      <h1 className="text-foreground-600 text-xl font-bold">Boards</h1>
      {BOARD_TABS.map(({ name, key, href, accessibleRoles }) => {
        if (!accessibleRoles.includes(role)) return null;
        return (
          <Link key={key} className="w-full" href={href}>
            {name}
          </Link>
        );
      })}
      <h1 className="text-foreground-600 text-xl font-bold">Members</h1>
      {MEMBER_TABS.map(({ key, href, name, accessibleRoles }) => {
        if (!accessibleRoles.includes(role)) return null;
        return (
          <Link key={key} className="w-full" href={href}>
            {name}
          </Link>
        );
      })}
    </SheetContent>
  );
}

export default MobileMenuSheet;

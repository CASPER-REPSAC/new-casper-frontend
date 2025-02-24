'use client';

import { CasperLogo } from '@app/_components/common';
import { BOARD_TABS, MEMBER_TABS } from '@app/_constants/menu';
import Link from 'next/link';
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
import { ADMIN_PATH, PATH } from '@app/_constants/urls';
import useMyInfo from '@app/_hooks/apis/user/useMyInfo';

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
  const { data: myProfile } = useMyInfo();
  const role = myProfile?.role || 'NOT_LOGGED_IN';

  return (
    <SheetContent side="left" className="flex flex-col">
      <SheetHeader>
        <Link href={PATH.home.url}>
          <CasperLogo />
        </Link>
      </SheetHeader>
      <h1 className="text-foreground-600 text-xl font-bold">Boards</h1>
      {BOARD_TABS.map(({ name, href, accessibleRoles }) => {
        if (!accessibleRoles.includes(role)) return null;
        return (
          <Link key={name} className="w-full" href={href}>
            {name}
          </Link>
        );
      })}
      <h1 className="text-foreground-600 text-xl font-bold">Members</h1>
      {MEMBER_TABS.map(({ href, name, accessibleRoles }) => {
        if (!accessibleRoles.includes(role)) return null;
        return (
          <Link key={name} className="w-full" href={href}>
            {name}
          </Link>
        );
      })}
      {role === 'admin' && (
        <>
          <h1 className="text-foreground-600 text-xl font-bold">Admin</h1>
          <Link href={ADMIN_PATH.board}>board</Link>
          <Link href={ADMIN_PATH.user}>user</Link>
        </>
      )}
    </SheetContent>
  );
}

export default MobileMenuSheet;

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import useMyInfo from '@app/_hooks/apis/user/useMyInfo';
import { CasperLogo } from '@app/_components/common';
import { MenuIcon } from '@app/_components/icons';
import { BOARD_TABS, MEMBER_TABS } from '@app/_constants/menu';
import { ADMIN_PATH, NEW_PATH, PATH } from '@app/_constants/urls';
import { Button } from '@app/_shadcn/components/ui/button';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
} from '@app/_shadcn/components/ui/sheet';

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
  const role = myProfile?.role || 'guest';

  return (
    <SheetContent side="left" className="flex flex-col">
      <SheetHeader>
        <Link href={PATH.home.url}>
          <CasperLogo />
        </Link>
      </SheetHeader>

      <h1 className="text-foreground-600 text-xl font-bold">Boards</h1>
      {role === 'admin' && (
        <>
          <h1 className="text-foreground-600 text-xl font-bold">Admin</h1>
          <Link href={ADMIN_PATH.board}>board</Link>
          <Link href={ADMIN_PATH.user}>user</Link>
        </>
      )}
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

      <h1 className="text-foreground-600 text-xl font-bold">Assignment</h1>
      <Link href={NEW_PATH.assignmentList.url(1)}>과제 목록</Link>
      <Link href={NEW_PATH.assignmentCreate.url}>과제 생성</Link>
    </SheetContent>
  );
}

export default MobileMenuSheet;

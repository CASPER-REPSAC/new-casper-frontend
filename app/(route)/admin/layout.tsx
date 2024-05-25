'use client';

import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { useRecoilValue } from 'recoil';
import { Button } from '@app/_shadcn/components/ui/button';
import { roleState } from '@app/_store/permissionAtoms';
import { Tabs, TabsList, TabsTrigger } from '@app/_shadcn/components/ui/tabs';
import { usePathname } from 'next/navigation';
import { ADMIN_PATH } from '@app/_constants/urls';

function Layout({ children }: PropsWithChildren) {
  const role = useRecoilValue(roleState);
  const pathname = usePathname();

  if (role !== '관리자')
    return (
      <div className="flex-center h-screen flex-col gap-2">
        관리자만 접근 가능해요
        <Button asChild>
          <Link href="/">돌아가거라</Link>
        </Button>
      </div>
    );

  return (
    <div className="common-center my-20 flex gap-12">
      <Tabs value={pathname} className="h-fit">
        <TabsList className="flex h-fit flex-col gap-2">
          <TabsTrigger asChild value={ADMIN_PATH.user}>
            <Link className="w-full" href={ADMIN_PATH.user}>
              user
            </Link>
          </TabsTrigger>
          <TabsTrigger asChild value={ADMIN_PATH.board}>
            <Link className="w-full" href={ADMIN_PATH.board}>
              board
            </Link>
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <section className="w-full">{children}</section>
    </div>
  );
}

export default Layout;

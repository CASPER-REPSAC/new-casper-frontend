'use client';

import { Button } from '@app/_shadcn/components/ui/button';
import { roleState } from '@app/_store/permissionAtoms';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { useRecoilValue } from 'recoil';

function Layout({ children }: PropsWithChildren) {
  const role = useRecoilValue(roleState);

  if (role !== '관리자')
    return (
      <div className="flex-center h-screen flex-col gap-2">
        관리자만 접근 가능해요
        <Button asChild>
          <Link href="/">돌아가거라</Link>
        </Button>
      </div>
    );

  return <div className="common-center my-20">{children}</div>;
}

export default Layout;

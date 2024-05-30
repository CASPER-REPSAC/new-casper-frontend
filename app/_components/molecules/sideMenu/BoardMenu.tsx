'use client';

import { memo } from 'react';
import { useRecoilValue } from 'recoil';
import { roleState } from '@app/_store/permissionAtoms';
import Link from 'next/link';
import { BOARD_TABS } from '@app/_constants/menu';
import { Tabs, TabsList, TabsTrigger } from '@app/_shadcn/components/ui/tabs';
import { useParams } from 'next/navigation';

function BoardMenu() {
  const role = useRecoilValue(roleState);
  const { boardType } = useParams<{ boardType: string }>();

  return (
    <Tabs value={boardType}>
      <TabsList className="flex h-fit flex-col gap-2 ">
        {BOARD_TABS.map(({ key, name, href, accessibleRoles }) => {
          if (!accessibleRoles.includes(role)) return null;
          return (
            <TabsTrigger asChild key={key} value={key}>
              <Link href={href} className="w-full">
                {name}
              </Link>
            </TabsTrigger>
          );
        })}
      </TabsList>
    </Tabs>
  );
}

export default memo(BoardMenu);

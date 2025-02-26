'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { memo } from 'react';
import useMyInfo from '@app/_hooks/apis/user/useMyInfo';
import { BOARD_TABS } from '@app/_constants/menu';
import { Tabs, TabsList, TabsTrigger } from '@app/_shadcn/components/ui/tabs';

function BoardMenu() {
  const { data: myProfile } = useMyInfo();
  const role = myProfile?.role || 'guest';
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

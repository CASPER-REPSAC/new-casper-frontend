'use client';

import { memo } from 'react';
import Link from 'next/link';
import { BOARD_TABS } from '@app/_constants/menu';
import { Tabs, TabsList, TabsTrigger } from '@app/_shadcn/components/ui/tabs';
import { useParams } from 'next/navigation';
import useMyInfo from '@app/_hooks/apis/user/useMyInfo';

function BoardMenu() {
  const { data: myProfile } = useMyInfo();
  const role = myProfile?.role;
  const { boardType } = useParams<{ boardType: string }>();

  return (
    <Tabs value={boardType}>
      <TabsList className="flex h-fit flex-col gap-2 ">
        {BOARD_TABS.map(({ key, name, href, accessibleRoles }) => {
          if (!role || !accessibleRoles.includes(role)) return null;
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

'use client';

import { memo } from 'react';
import { User2Icon } from 'lucide-react';
import { MemberProfile } from '@app/_types/userTypes';
import { Card, CardContent, CardFooter } from '@app/_shadcn/components/ui/card';
import Avatar from '@app/_components/user/Avatar';

interface Props {
  member: MemberProfile;
}

function MemberCard({ member }: Props) {
  const { image, name } = member;

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex-center relative size-40 overflow-hidden rounded bg-muted">
          <Avatar
            rounded={false}
            src={image || undefined}
            alt="profile"
            className="size-full"
            fallback={<User2Icon className="size-24 text-slate-400" />}
            priority
          />
        </div>
      </CardContent>
      <CardFooter className="flex-center p-2">{name}</CardFooter>
    </Card>
  );
}

export default memo(MemberCard);

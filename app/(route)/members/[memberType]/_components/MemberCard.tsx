'use client';

import { memo } from 'react';
import { User2Icon } from 'lucide-react';
import { MemberProfile } from '@app/_types/userTypes';
import { Card, CardContent, CardFooter } from '@app/_shadcn/components/ui/card';
import ImageWithFallback from '@app/_components/common/ImageWithFallback';

interface Props {
  member: MemberProfile;
}

function MemberCard({ member }: Props) {
  const { image, name } = member;

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex-center relative size-40 overflow-hidden rounded bg-muted">
          {image ? (
            <ImageWithFallback
              src={image}
              fill
              alt="profile"
              className="object-cover"
              sizes="100%"
              fallback={<User2Icon className="size-28 text-slate-400" />}
              priority
            />
          ) : (
            <User2Icon className="size-28 text-slate-400" />
          )}
        </div>
      </CardContent>
      <CardFooter className="flex-center p-2">{name}</CardFooter>
    </Card>
  );
}

export default memo(MemberCard);

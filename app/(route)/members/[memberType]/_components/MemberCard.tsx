'use client';

import { MemberProfile } from '@app/_types/userTypes';
import { memo } from 'react';

import { Card, CardContent, CardFooter } from '@app/_shadcn/components/ui/card';

import { User2Icon } from 'lucide-react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@app/_shadcn/components/ui/avatar';

interface Props {
  member: MemberProfile;
}

function MemberCard({ member }: Props) {
  const { image, name } = member;

  return (
    <>
      <Card>
        <CardContent className="p-4">
          <Avatar className="size-40 rounded">
            <AvatarImage src={image || undefined} />
            <AvatarFallback className="rounded">
              <User2Icon className="size-20 object-cover text-slate-400" />
            </AvatarFallback>
          </Avatar>
        </CardContent>
        <CardFooter className="flex-center p-2">{name}</CardFooter>
      </Card>
    </>
  );
}

// const wrapperVariants: Variants = {
//   animate: {
//     scale: 1.1,
//     rotate: 4,
//     transition: {
//       type: 'spring',
//       damping: 30,
//       stiffness: 500,
//     },
//   },
// };

export default memo(MemberCard);

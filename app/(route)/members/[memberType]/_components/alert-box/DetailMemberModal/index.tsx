'use client';

import { MemberProfile } from '@app/_types/userTypes';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@app/_shadcn/components/ui/avatar';
import { User2Icon } from 'lucide-react';
import DetailDescription from './DetailDescription';

interface Props {
  member: MemberProfile;
}

function DetailMemberModal({
  member: { id, image, introduce, nickname, name, role, homepage, email },
}: Props) {
  return (
    <div className="flex-center min-w-[600px] flex-col gap-8 lg:flex-row">
      <Avatar className="h-40 w-40 shrink-0 rounded">
        <AvatarImage src={image || undefined} />
        <AvatarFallback className="rounded">
          <User2Icon className="size-32 text-slate-400" />
        </AvatarFallback>
      </Avatar>
      <DetailDescription
        name={name}
        introduce={introduce}
        nickname={nickname}
        role={role}
        homepage={homepage}
        email={email}
        id={id}
        image={image}
      />
    </div>
  );
}

export default DetailMemberModal;

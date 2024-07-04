'use client';

import { MemberProfile } from '@app/_types/userTypes';
import { User2Icon } from 'lucide-react';
import Avatar from '@app/_components/user/Avatar';
import DetailDescription from './DetailDescription';

interface Props {
  member: MemberProfile;
}

function DetailMemberModal({
  member: { id, image, introduce, nickname, name, role, homepage, email },
}: Props) {
  return (
    <div className="flex-center flex-col gap-8 lg:flex-row">
      <Avatar
        className="size-36 shrink-0"
        src={image || undefined}
        alt="profile"
        fallback={<User2Icon className="size-28 text-slate-400" />}
        rounded={false}
      />

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

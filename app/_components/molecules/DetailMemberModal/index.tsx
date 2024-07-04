'use client';

import { MemberProfile } from '@app/_types/userTypes';
import ImageWithFallback from '@app/_components/common/ImageWithFallback';

import { User2Icon } from 'lucide-react';
import DetailDescription from './DetailDescription';

interface Props {
  member: MemberProfile;
}

function DetailMemberModal({
  member: { id, image, introduce, nickname, name, role, homepage, email },
}: Props) {
  return (
    <div className="flex-center flex-col gap-8 lg:flex-row">
      <div className="flex-center relative size-40 overflow-hidden rounded bg-muted">
        {image ? (
          <ImageWithFallback
            src={image}
            fill
            alt="profile"
            className="object-cover"
            fallback={<User2Icon className="size-28 text-slate-400" />}
          />
        ) : (
          <User2Icon className="size-28 text-slate-400" />
        )}
      </div>

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

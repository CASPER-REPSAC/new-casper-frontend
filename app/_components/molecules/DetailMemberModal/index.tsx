'use client';

import { User2Icon } from 'lucide-react';
import Avatar from '@app/_components/user/Avatar';
import useMemberQuery from '@app/_hooks/apis/user/useMemeberQuery';
import Spinner from '@app/_components/Spinner';
import DetailDescription from './DetailDescription';

interface Props {
  id: string;
}

function DetailMemberModal({ id }: Props) {
  const { data, isLoading } = useMemberQuery(id);

  if (isLoading)
    return (
      <div className="flex-center h-[550.5px]">
        <Spinner />
      </div>
    );
  if (!data) return 'not found data.';

  const { image, introduce, nickname, name, role, homepage, email } = data;

  return (
    <div className="flex-center flex-col gap-8 px-12 py-8">
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

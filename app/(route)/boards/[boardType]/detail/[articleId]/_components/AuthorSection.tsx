'use client';

import { User } from '@nextui-org/react';

interface Props {
  nickname: string;
  profile?: string;
  introduce?: string;
}

function AuthorSection({ nickname, profile, introduce }: Props) {
  return (
    <div className="flex items-center gap-8 ">
      <User
        classNames={{
          name: 'text-2xl',
          description: 'text-lg',
        }}
        name={nickname}
        description={introduce}
        avatarProps={{
          showFallback: true,
          src: profile,
          size: 'lg',
          isBordered: true,
        }}
      />
    </div>
  );
}

export default AuthorSection;

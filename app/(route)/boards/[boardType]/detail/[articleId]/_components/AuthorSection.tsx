'use client';

import Avatar from './common/Avatar';

interface Props {
  nickname: string;
}

function AuthorSection({ nickname }: Props) {
  return (
    <div className="flex items-center gap-8 ">
      <Avatar className="shrink-0" src="/defaultprofile.webp" />
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl">{nickname}</h1>
        <p className="w-2/3">
          소개글 소개글소개글소개글 소개글소개글소개글 소개글소개글소개글
          소개글소개글소개글
        </p>
      </div>
    </div>
  );
}

export default AuthorSection;

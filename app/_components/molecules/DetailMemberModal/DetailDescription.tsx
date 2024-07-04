import { LinkIcon, MailIcon } from '@app/_components/icons';
import { Separator } from '@app/_shadcn/components/ui/separator';
import { MemberProfile } from '@app/_types/userTypes';
import { ReactNode } from 'react';

function DetailDescription({
  name,
  introduce,
  nickname,
  role,
  homepage,
  email,
}: MemberProfile) {
  const ROLE = {
    active: '활동 중',
    rest: '휴학생',
    graduate: '졸업생',
    associate: '준회원',
    admin: '관리자',
  };

  return (
    <section className="flex w-full flex-col gap-12">
      <DetailRow title="정보">
        <div className="grid grid-cols-3">
          <span className="text-xs font-thin">이름</span>
          <span className="text-xs font-thin">닉네임</span>
          <span className="text-xs font-thin">활동 상태</span>

          <span className="">{name}</span>
          <span className="">{nickname}</span>
          <span className="">{ROLE[role]}</span>
        </div>
      </DetailRow>

      <DetailRow title="소개">
        {introduce ? (
          <p>{introduce}</p>
        ) : (
          <div className="h-10">소개글이 없어요.</div>
        )}
      </DetailRow>

      <DetailRow title="소셜 정보">
        <div className="flex items-center gap-2">
          <MailIcon size={16} />
          <div>{email}</div>
        </div>
        {homepage && (
          <div className="flex items-center gap-2">
            <LinkIcon size={16} />
            <a href={homepage}>{homepage}</a>
          </div>
        )}
      </DetailRow>
    </section>
  );
}

function DetailRow({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="mb-1  pb-1 text-2xl font-bold">{title}</div>
      <Separator className="mb-2" />
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}

export default DetailDescription;

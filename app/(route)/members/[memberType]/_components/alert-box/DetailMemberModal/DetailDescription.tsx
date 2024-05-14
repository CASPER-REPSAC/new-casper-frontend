import { HomeIcon, MailIcon } from '@app/_components/icons';
import { ICON_SIZE } from '@app/_constants/size';
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
  return (
    <section className="flex w-full flex-col gap-12">
      <DetailRow title="정보">
        <div className="flex items-end gap-4">
          <span className="text-xl">{name}</span>
          <span className="font-thin">{nickname}</span>
          <span className="font-thin">{role}</span>
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
        <div className="flex items-center gap-1">
          <MailIcon size={ICON_SIZE.small} />
          <div>{email}</div>
        </div>
        {homepage && (
          <div className="flex items-center gap-1">
            <HomeIcon size={ICON_SIZE.small} />
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
      <Separator />
      {children}
    </div>
  );
}

export default DetailDescription;

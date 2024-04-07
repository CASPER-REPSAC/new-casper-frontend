import { HomeIcon, MailIcon } from '@app/_components/icons';
import { ICON_SIZE } from '@app/_constants/size';
import { MemberProfile } from '@app/_types/userTypes';
import { Divider } from '@nextui-org/react';
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
        <div className="flex items-center gap-4">
          <div className="text-xl">{name}</div>
          <div className="font-thin">{nickname}</div>
          <div className="font-thin">{role}</div>
        </div>
      </DetailRow>

      <DetailRow title="소개">
        <p>{introduce}</p>
      </DetailRow>

      <DetailRow title="소셜 정보">
        <div className="flex items-center gap-1">
          <MailIcon size={ICON_SIZE.medium} />
          <div>{email}</div>
        </div>
        {homepage && (
          <div className="flex items-center gap-1">
            <HomeIcon size={ICON_SIZE.medium} />
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
      <Divider />
      {children}
    </div>
  );
}

export default DetailDescription;

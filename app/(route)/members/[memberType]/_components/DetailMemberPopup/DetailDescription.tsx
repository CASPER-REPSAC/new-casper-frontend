import { HomeIcon, MailIcon } from 'app/_components/icons';
import { ICON_SIZE } from 'app/_constants/size';
import { selectedMemberState } from 'app/_store/memberCardAtoms';
import { ReactNode } from 'react';
import { useRecoilValue } from 'recoil';

function DetailDescription() {
  const selectedMember = useRecoilValue(selectedMemberState);

  if (!selectedMember) return <></>;
  const { name, introduce, nickname, role, homepage, email } = selectedMember;

  return (
    <section className="flex w-full flex-col gap-6">
      <DetailRow title="정보">
        <div className="flex items-center gap-4">
          <div className="text-xl">{name}</div>
          <div className="font-thin">{nickname}</div>
          <div className="font-thin">{role}</div>
        </div>
      </DetailRow>

      <DetailRow title="소개">
        <div>{introduce}</div>
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
      <div className="mb-1 border-b border-solid border-gray-600 pb-1 text-2xl font-bold">
        {title}
      </div>
      {children}
    </div>
  );
}

export default DetailDescription;

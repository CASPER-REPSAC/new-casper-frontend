import { getAllMember } from 'app/_service/user';
import { MEMBER_TYPE } from 'app/_constants/mock';
import { DetailMemberCard, MemberCard, PageTemplate } from './_components';

export const revalidate = 600;

export function generateStaticParams() {
  const memberTypes = Object.values(MEMBER_TYPE);
  return memberTypes.map((memberType) => ({
    memberType,
  }));
}

interface Props {
  params: { memberType: string };
}

async function Members({ params: { memberType } }: Props) {
  const data = await getAllMember(memberType, true);

  return (
    <PageTemplate
      popupSection={<DetailMemberCard />}
      memberGridSection={data?.memberList.map((member) => (
        <MemberCard key={member.id} member={member} />
      ))}
    />
  );
}

export default Members;

import { getAllMember } from '@app/_service/user';
import { MEMBER_TYPE } from '@app/_constants/mock';
import { DetailMemberCard, MemberCard } from './_components';

// Todo. Revalidate Tag 이용하기
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
  const data = await getAllMember(memberType);

  return (
    <>
      <DetailMemberCard />
      <div
        className="mx-auto grid grid-cols-1 place-items-center gap-x-5 gap-y-8 
      md:w-[630px] md:grid-cols-3 
      2xl:w-[840px] 2xl:grid-cols-4"
      >
        {data?.memberList.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </>
  );
}

export default Members;

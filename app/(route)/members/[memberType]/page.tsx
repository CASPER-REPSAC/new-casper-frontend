import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@app/_shadcn/components/ui/dialog';
import { getAllMember } from '@app/_service/user';
import { MEMBER_TYPE } from '@app/_constants/mock';
import MemberCard from './_components/MemberCard';
import DetailMemberModal from './_components/alert-box/DetailMemberModal';

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
    <div
      className="mx-auto grid grid-cols-1 place-items-center gap-x-5 gap-y-8 
      md:w-[630px] md:grid-cols-3 
      2xl:w-[840px] 2xl:grid-cols-4"
    >
      {data?.memberList.map((member) => (
        <Dialog>
          <DialogTrigger>
            <MemberCard key={member.id} member={member} />
          </DialogTrigger>
          <DialogContent className="lg:min-w-[700px]">
            <DetailMemberModal member={member} />
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}

export default Members;

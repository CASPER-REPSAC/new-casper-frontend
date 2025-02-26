import userService from '@app/_service/userService';
import { MEMBER_TYPE } from '@app/_constants/mock';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@app/_shadcn/components/ui/dialog';
import DetailMemberModal from '../../../_components/molecules/DetailMemberModal';
import MemberCard from './_components/MemberCard';

export const revalidate = 600;

export function generateStaticParams() {
  const memberTypes = Object.values(MEMBER_TYPE);
  return memberTypes.map((memberType) => ({
    memberType,
  }));
}

interface Props {
  params: Promise<{ memberType: string }>;
}

async function Members(props: Props) {
  const params = await props.params;

  const {
    memberType
  } = params;

  const data = await userService.getAllMember(memberType);

  return (
    <div
      className="mx-auto grid grid-cols-1 place-items-center gap-x-5 gap-y-8 
      md:w-[630px] md:grid-cols-3 
      2xl:w-[840px] 2xl:grid-cols-4"
    >
      {data?.memberList.map((member) => (
        <Dialog key={member.id}>
          <DialogTrigger>
            <MemberCard key={member.id} member={member} />
          </DialogTrigger>
          <DialogContent>
            <DetailMemberModal id={member.id} />
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}

export default Members;

import DetailMemberModal from '@app/_components/molecules/DetailMemberModal';
import Avatar from '@app/_components/user/Avatar';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@app/_shadcn/components/ui/dialog';
import { MemberProfile } from '@app/_types/userTypes';

interface Props {
  nickname: MemberProfile['nickname'];
  profile: MemberProfile['image'];
  id: MemberProfile['id'];
}

function AvatarWithDialog({ nickname, profile, id }: Props) {
  return (
    <Dialog>
      <DialogTrigger>
        <Avatar
          className="size-14"
          src={profile || undefined}
          fallback={nickname}
          rounded
          alt="profile"
        />
      </DialogTrigger>
      <DialogContent>
        <DetailMemberModal id={id} />
      </DialogContent>
    </Dialog>
  );
}

export default AvatarWithDialog;

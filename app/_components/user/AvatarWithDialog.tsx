'use client';

import DetailMemberModal from '@app/_components/molecules/DetailMemberModal';
import Avatar, { AvatarProps } from '@app/_components/user/Avatar';
import { memberQueryKey } from '@app/_hooks/apis/queryKey';
import userService from '@app/_service/userService';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@app/_shadcn/components/ui/dialog';
import { MemberProfile } from '@app/_types/userTypes';
import { useQueryClient } from '@tanstack/react-query';

interface Props extends AvatarProps {
  id: MemberProfile['id'];
}

function AvatarWithDialog({ id, ...avatarProps }: Props) {
  const queryClient = useQueryClient();

  const onMouseOver = async () => {
    await queryClient.prefetchQuery({
      queryKey: memberQueryKey.detail(id),
      queryFn: () => userService.getMember(id),
    });
  };

  return (
    <Dialog>
      <DialogTrigger onMouseOver={onMouseOver}>
        <Avatar {...avatarProps} />
      </DialogTrigger>
      <DialogContent>
        <DetailMemberModal id={id} />
      </DialogContent>
    </Dialog>
  );
}

export default AvatarWithDialog;

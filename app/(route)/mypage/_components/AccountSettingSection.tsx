'use client';

import Link from 'next/link';
import useMyInfo from '@app/_hooks/apis/user/useMyInfo';
import useWithdrawalMutation from '@app/_hooks/apis/user/useWithdrawalMutation';
import ButtonWithDialogCheck from '@app/_components/common/WithDialogCheck';
import { NEW_PATH } from '@app/_constants/urls';
import { buttonVariants } from '@app/_shadcn/components/ui/button';
import { cn } from '@app/_shadcn/lib/utils';

function AccountSettingSection() {
  const { mutate: withdrawMutate } = useWithdrawalMutation();
  const { data: myProfile } = useMyInfo();

  const onWithdrawalClick = () => {
    if (!myProfile?.id) {
      throw new Error('[개발자 문의 바람] myProfile id 상태를 확인해주세요.');
    }
    withdrawMutate(myProfile.id);
  };

  return (
    <section className="flex justify-end gap-4">
      <Link
        href={NEW_PATH.passwordUpdate.url}
        className={cn(buttonVariants({ variant: 'secondary' }), 'w-full')}
      >
        비밀번호 변경하러 가기
      </Link>
      <ButtonWithDialogCheck
        title="회원 탈퇴"
        description="정말 탈퇴하시겠어요?"
        className="w-full"
        confirmVariant="destructive"
        variant="destructive"
        onClick={onWithdrawalClick}
      >
        회원 탈퇴하기
      </ButtonWithDialogCheck>
    </section>
  );
}

export default AccountSettingSection;

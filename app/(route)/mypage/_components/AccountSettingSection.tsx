'use client';

import ButtonWithDialogCheck from '@app/_components/common/WithDialogCheck';
import useWithdrawalMutation from '@app/_hooks/apis/user/useWithdrawalMutation';
import { Button } from '@app/_shadcn/components/ui/button';
import { myProfileState } from '@app/_store/permissionAtoms';
import { useRecoilValue } from 'recoil';

function AccountSettingSection() {
  const { mutate: withdrawMutate } = useWithdrawalMutation();
  const myProfile = useRecoilValue(myProfileState);

  const onWithdrawalClick = () => {
    if (!myProfile?.id) {
      throw new Error('[개발자 문의 바람] myProfile id 상태를 확인해주세요.');
    }
    withdrawMutate(myProfile.id);
  };

  return (
    <section className="flex justify-end gap-4">
      <Button className="w-full" variant="secondary">
        비밀번호 변경(개발 중이에요!)
      </Button>
      <ButtonWithDialogCheck
        title="회원 탈퇴"
        description="정말 탈퇴하시겠어요?"
        className="w-full"
        confirmVariant="destructive"
        variant="destructive"
        onClick={onWithdrawalClick}
      >
        회원 탈퇴
      </ButtonWithDialogCheck>
    </section>
  );
}

export default AccountSettingSection;

'use client';

import { useProfileUpdateMutation } from '@app/_hooks/apis/user';
import { Button } from '@app/_shadcn/components/ui/button';
import { ProfileUpdateForm } from '@app/_types/userTypes';
import { useFormContext } from 'react-hook-form';

function ButtonSection() {
  const { handleSubmit } = useFormContext<ProfileUpdateForm>();
  const { mutate, isPending } = useProfileUpdateMutation();

  const onValid = (myProfile: ProfileUpdateForm) => {
    const { profileImg, ...reqData } = myProfile;
    mutate(reqData);
  };

  return (
    <Button size="lg" onClick={handleSubmit(onValid)} disabled={isPending}>
      저장
    </Button>
  );
}

export default ButtonSection;

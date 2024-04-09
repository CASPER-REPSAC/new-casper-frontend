'use client';

import { useProfileUpdateMutation } from '@app/_hooks/apis/user';
import { ProfileUpdateForm } from '@app/_types/userTypes';
import { Button } from '@nextui-org/react';
import { useFormContext } from 'react-hook-form';

function ButtonSection() {
  const { handleSubmit } = useFormContext<ProfileUpdateForm>();
  const { mutate, isPending } = useProfileUpdateMutation();

  const onValid = (myProfile: ProfileUpdateForm) => {
    const { profileImg, ...reqData } = myProfile;
    mutate(reqData);
  };

  return (
    <Button
      color="primary"
      size="lg"
      onClick={handleSubmit(onValid)}
      isLoading={isPending}
    >
      저장
    </Button>
  );
}

export default ButtonSection;

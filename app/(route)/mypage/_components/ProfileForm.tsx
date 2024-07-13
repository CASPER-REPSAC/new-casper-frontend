'use client';

import {
  DefaultValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { ProfileUpdateForm } from '@app/_types/userTypes';
import useProfileUpdateMutation from '@app/_hooks/apis/user/useProfileUpdateMutation';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  defaultValues: DefaultValues<ProfileUpdateForm>;
}

function ProfileForm({ children, defaultValues }: Props) {
  const methods = useForm<ProfileUpdateForm>({
    defaultValues,
  });
  const { handleSubmit } = methods;
  const { mutate } = useProfileUpdateMutation();

  const onValid: SubmitHandler<ProfileUpdateForm> = ({
    profileImgPath,
    nickname,
    introduce,
    homepage,
    name,
  }) => {
    mutate({
      name,
      nickname,
      introduce,
      homepage,
      profileImgPath,
    });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onValid)} className="flex flex-col gap-12">
        {children}
      </form>
    </FormProvider>
  );
}

export default ProfileForm;

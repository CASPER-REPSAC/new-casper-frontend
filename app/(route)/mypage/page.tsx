'use client';

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import { myProfileState } from '@app/_store/permissionAtoms';
import { ProfileUpdateForm } from '@app/_types/userTypes';
import useProfileUpdateMutation from '@app/_hooks/apis/user/useProfileUpdateMutation';
import { Button } from '@app/_shadcn/components/ui/button';
import MyAvatarInput from './_components/MyAvatarInput';
import MyInfoSection from './_components/MyInfoSection';

function MyPage() {
  const myProfile = useRecoilValue(myProfileState);
  const methods = useForm<ProfileUpdateForm>({
    defaultValues: {
      introduce: myProfile ? myProfile.introduce : '',
      name: myProfile ? myProfile.name : '',
      nickname: myProfile ? myProfile.nickname : '',
      role: myProfile ? myProfile.role : '',
      homepage: myProfile ? myProfile.homepage : '',
    },
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
    <form
      onSubmit={handleSubmit(onValid)}
      className="small-center flex flex-col gap-12"
    >
      <FormProvider {...methods}>
        <MyAvatarInput />
        <MyInfoSection />
        <Button type="submit" size="lg">
          저장
        </Button>
      </FormProvider>
    </form>
  );
}

export default MyPage;

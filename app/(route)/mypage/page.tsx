'use client';

import { myProfileState } from '@app/_store/permissionAtoms';
import { MyProfile } from '@app/_types/userTypes';
import { FormProvider, useForm } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import MyAvatarForm from './_components/MyAvatarForm';
import MyInfoForm from './_components/MyInfoForm';
import ButtonSection from './_components/ButtonSection';

function MyPage() {
  const myProfile = useRecoilValue(myProfileState);
  const methods = useForm<MyProfile>({ defaultValues: myProfile });

  return (
    <div className="small-center flex flex-col gap-12">
      <FormProvider {...methods}>
        <MyAvatarForm />
        <MyInfoForm />
        <ButtonSection />
      </FormProvider>
    </div>
  );
}

export default MyPage;

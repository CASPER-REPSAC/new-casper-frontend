import { myProfileState } from '@app/_store/permissionAtoms';
import { MyProfile } from '@app/_types/userTypes';
import { ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useRecoilValue } from 'recoil';

interface Props {
  children: ReactNode;
}

function ClientFormProvider({ children }: Props) {
  const myProfile = useRecoilValue(myProfileState);

  const methods = useForm<MyProfile>({
    defaultValues: {
      id: myProfile?.id,
      nickname: myProfile?.nickname,
      homepage: myProfile?.homepage,
      introduce: myProfile?.introduce,
      image: myProfile?.image,
      role: myProfile?.role,
      name: myProfile?.name,
      email: myProfile?.email,
    },
  });
  return <FormProvider {...methods}>{children}</FormProvider>;
}

export default ClientFormProvider;

import { FormProvider, useForm } from 'react-hook-form';
import { MyPageTemplate } from '@src/components/templates';
import {
  ButtonSection,
  MyAvatarForm,
  MyInfoForm,
} from '@src/components/organism/myPage';
import { useProfile } from '@src/hooks/apis/user';

function MyPage() {
  const { data, isLoading } = useProfile('ine');
  const methods = useForm();

  if (!data || isLoading) return <>Loading</>;

  return (
    <FormProvider {...methods}>
      <MyPageTemplate
        avartarSection={<MyAvatarForm />}
        myInfoSection={<MyInfoForm />}
        buttonSection={<ButtonSection />}
      />
    </FormProvider>
  );
}

export default MyPage;

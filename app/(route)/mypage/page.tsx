import { ClientFormProvider } from '@app/_components/molecules';
import { ButtonSection, MyAvatarForm, MyInfoForm } from './_components';

async function MyPage() {
  return (
    <div className="small-center flex flex-col gap-12">
      <ClientFormProvider>
        <MyAvatarForm />
        <MyInfoForm />
        <ButtonSection />
      </ClientFormProvider>
    </div>
  );
}

export default MyPage;

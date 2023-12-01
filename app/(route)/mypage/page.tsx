import { ClientFormProvider } from 'app/_components/molecules';
import {
  ButtonSection,
  MyAvatarForm,
  MyInfoForm,
  PageWrapper,
} from './_components';

async function MyPage() {
  return (
    <PageWrapper>
      <ClientFormProvider>
        <MyAvatarForm />
        <MyInfoForm />
        <ButtonSection />
      </ClientFormProvider>
    </PageWrapper>
  );
}

export default MyPage;

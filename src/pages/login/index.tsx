import { CasperLogo } from '@src/components/common';
import { LoginForm, LoginMoreLinks } from '@src/components/organism/login';
import { LoginTemplate } from '@src/components/templates';
import { PATH } from 'app/_constants/urls';
import { useRouter } from 'next/router';

export default function Login() {
  const { push } = useRouter();

  return (
    <LoginTemplate
      logoSection={
        <CasperLogo size="large" onClick={() => push(PATH.home.url)} />
      }
      loginFormSection={<LoginForm />}
      linkSection={<LoginMoreLinks />}
    />
  );
}

import {
  LoginForm,
  LoginLogo,
  LoginMoreLinks,
} from '@src/components/organism/login';
import { LoginTemplate } from '@src/components/templates';

export default function Login() {
  return (
    <LoginTemplate
      logoSection={<LoginLogo />}
      loginFormSection={<LoginForm />}
      linkSection={<LoginMoreLinks />}
    />
  );
}

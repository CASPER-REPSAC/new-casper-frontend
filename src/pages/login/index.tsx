import LoginTemplate from '@src/components/templates/login/LoginTemplate';
import LoginForm from '@src/components/organism/login/LoginForm';
import LoginLogo from '@src/components/organism/login/LoginLogo';
import LoginMoreLinks from '@src/components/organism/login/LoginMoreLinks';

export default function Login() {
  return (
    <LoginTemplate
      logoSection={<LoginLogo />}
      loginFormSection={<LoginForm />}
      linkSection={<LoginMoreLinks />}
    />
  );
}

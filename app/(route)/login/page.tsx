import { LoginForm, LoginMoreLinks, Logo } from './_components';
import SocialLoginSection from './_components/SocialLoginSection';

function LoginPage() {
  return (
    <div className="small-center absolute-center">
      <Logo />
      <LoginForm />
      <LoginMoreLinks />
      <SocialLoginSection />
    </div>
  );
}

export default LoginPage;

import { LoginForm, LoginMoreLinks, Logo } from './_components';

function LoginPage() {
  return (
    <div className="small-center absolute-center">
      <Logo />
      <LoginForm />
      <LoginMoreLinks />
    </div>
  );
}

export default LoginPage;

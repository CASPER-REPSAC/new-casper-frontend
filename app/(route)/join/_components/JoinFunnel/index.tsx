import { useFunnel } from 'app/_hooks';
import {
  AgreeForm,
  EmailForm,
  IdForm,
  NameForm,
  PasswordForm,
} from './_components';

function JoinFunnel() {
  const { funnelStep } = useFunnel();

  return (
    <form className="small-center flex flex-col gap-7">
      {funnelStep === 'agree' && <AgreeForm />}
      {funnelStep === 'email' && <EmailForm />}
      {funnelStep === 'name' && <NameForm />}
      {funnelStep === 'id' && <IdForm />}
      {funnelStep === 'password' && <PasswordForm />}
    </form>
  );
}

export default JoinFunnel;

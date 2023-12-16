import { useFunnel } from 'app/_hooks';
import {
  AgreeForm,
  EmailForm,
  IdForm,
  NameForm,
  PasswordForm,
  NextButton,
} from './_components';

function JoinFunnel() {
  const { funnelStep } = useFunnel();

  return (
    <form className="flex flex-col gap-7">
      {funnelStep === 'agree' && <AgreeForm />}
      {funnelStep === 'email' && <EmailForm />}
      {funnelStep === 'name' && <NameForm />}
      {funnelStep === 'id' && <IdForm />}
      {funnelStep === 'password' && <PasswordForm />}
      <NextButton />
    </form>
  );
}

export default JoinFunnel;

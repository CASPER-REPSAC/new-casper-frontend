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
    <div className="flex w-full flex-col gap-4">
      {funnelStep === 'agree' && <AgreeForm />}
      {funnelStep === 'email' && <EmailForm />}
      {funnelStep === 'name' && <NameForm />}
      {funnelStep === 'id' && <IdForm />}
      {funnelStep === 'password' && <PasswordForm />}
    </div>
  );
}

export default JoinFunnel;

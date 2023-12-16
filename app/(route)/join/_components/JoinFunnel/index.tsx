import { useFunnel } from 'app/_hooks';
import {
  AgreeForm,
  EmailForm,
  IdForm,
  NameForm,
  PasswordForm,
} from './_components';
import NextButton from './_components/NextButton';

function JoinFunnel() {
  const { funnelStep, nextStep } = useFunnel();

  console.log(nextStep);

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

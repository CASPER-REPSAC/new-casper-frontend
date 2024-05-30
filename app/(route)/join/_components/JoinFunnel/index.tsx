import useFunnel from '@app/_hooks/useFunnel';
import AgreeForm from './_components/AgreeForm';
import EmailForm from './_components/EmailForm';
import NameForm from './_components/NameForm';
import IdForm from './_components/IdForm';
import PasswordForm from './_components/PasswordForm';

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

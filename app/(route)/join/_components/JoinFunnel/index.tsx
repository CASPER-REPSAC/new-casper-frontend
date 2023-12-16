import { useForm } from 'react-hook-form';
import { JoinFormData } from 'app/_types/joinTypes';
import { useFunnel } from 'app/_hooks';
import { useJoinMutation } from 'app/_hooks/apis/user';
import {
  AgreeForm,
  EmailForm,
  IdForm,
  NameForm,
  PasswordForm,
} from './_components';

function JoinFunnel() {
  const { mutate } = useJoinMutation();
  const { funnelStep, setFunnelStep } = useFunnel();
  const methods = useForm<JoinFormData>();

  return (
    <form className="flex flex-col gap-7">
      {funnelStep === 'agree' && (
        <AgreeForm onNext={() => setFunnelStep('email')} />
      )}
      {funnelStep === 'email' && (
        <EmailForm onNext={() => setFunnelStep('name')} />
      )}
      {funnelStep === 'name' && <NameForm onNext={() => setFunnelStep('id')} />}
      {funnelStep === 'id' && (
        <IdForm onNext={() => setFunnelStep('password')} />
      )}
      {funnelStep === 'password' && (
        <PasswordForm
          onNext={() => {
            const { id, pw, name, email, nickname } = methods.getValues();
            mutate({ id, pw, name, email, nickname });
          }}
        />
      )}
    </form>
  );
}

export default JoinFunnel;

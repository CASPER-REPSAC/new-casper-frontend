import styled from 'styled-components';
import { useForm, FormProvider } from 'react-hook-form';
import DefaultForm from '@src/components/common/DefaultForm';
import EmailForm from '@src/components/organism/join/EmailForm';
import NameForm from '@src/components/organism/join/NameForm';
import { JoinFormData, StepType } from '@src/types/joinTypes';
import IdForm from '@src/components/organism/join/IdForm';
import PasswordForm from '@src/components/organism/join/PasswrodForm';
import AgreeForm from '@src/components/organism/join/AgreeForm';
import useJoinMutation from '@src/hooks/apis/useJoinMutation';
import useFunnel from '@src/hooks/useFunnel';

function JoinForm() {
  const { mutate } = useJoinMutation();
  const { funnelStep, setFunnelStep } = useFunnel<StepType>('agree');
  const methods = useForm<JoinFormData>();

  return (
    <FormProvider {...methods}>
      <Form>
        {funnelStep === 'agree' && (
          <AgreeForm onNext={() => setFunnelStep('email')} />
        )}
        {funnelStep === 'email' && (
          <EmailForm onNext={() => setFunnelStep('name')} />
        )}
        {funnelStep === 'name' && (
          <NameForm onNext={() => setFunnelStep('id')} />
        )}
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
      </Form>
    </FormProvider>
  );
}

const Form = styled(DefaultForm)`
  gap: 2em;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default JoinForm;

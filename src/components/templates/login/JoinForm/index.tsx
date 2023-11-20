import styled from 'styled-components';
import { useForm, FormProvider } from 'react-hook-form';
import DefaultForm from '@src/components/common/defaultTag/DefaultForm';
import { JoinFormData, StepType } from '@src/types/joinTypes';
import useJoinMutation from '@src/hooks/apis/useJoinMutation';
import useFunnel from '@src/hooks/useFunnel';
import {
  AgreeForm,
  EmailForm,
  IdForm,
  NameForm,
  PasswordForm,
} from '@src/components/organism/join';

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

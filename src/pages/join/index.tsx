import {
  AgreeForm,
  EmailForm,
  IdForm,
  NameForm,
  PasswordForm,
} from '@src/components/organism/join';
import JoinTemplate from '@src/components/templates/JoinTemplate';
import { useFunnel } from 'app/_hooks';
import { useJoinMutation } from 'app/_hooks/apis/user';
import { JoinFormData, FunnelStepType } from '@src/types/joinTypes';
import { FormProvider, useForm } from 'react-hook-form';
import { styled } from 'styled-components';

export default function JoinPage() {
  const { mutate } = useJoinMutation();
  const { setFunnelStep } = useFunnel<FunnelStepType>('agree');
  const methods = useForm<JoinFormData>();

  return (
    <FormProvider {...methods}>
      <Form>
        <JoinTemplate
          agreeForm={<AgreeForm onNext={() => setFunnelStep('email')} />}
          emailForm={<EmailForm onNext={() => setFunnelStep('name')} />}
          nameForm={<NameForm onNext={() => setFunnelStep('id')} />}
          idForm={<IdForm onNext={() => setFunnelStep('password')} />}
          passwordForm={
            <PasswordForm
              onNext={() => {
                const { id, pw, name, email, nickname } = methods.getValues();
                mutate({ id, pw, name, email, nickname });
              }}
            />
          }
        />
      </Form>
    </FormProvider>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.8em;
`;

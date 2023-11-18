import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import DefaultForm from '@src/components/common/DefaultForm';
import EmailForm from '@src/components/organism/join/EmailForm';
import NameForm from '@src/components/organism/join/NameForm';
import { JoinFormData, StepType } from '@src/types/joinTypes';
import IdForm from '@src/components/organism/join/IdForm';
import PasswordForm from '@src/components/organism/join/PasswrodForm';
import AgreeForm from '@src/components/organism/join/AgreeForm';
import useJoinMutation from '@src/hooks/apis/useJoinMutation';

function JoinForm() {
  const { mutate } = useJoinMutation();
  const [step, setStep] = useState<StepType>('agree');
  const methods = useForm<JoinFormData>();
  const { query } = useRouter();

  const controllFunnel = useCallback(() => {
    const funnelStep = query['funnel-step'];

    if (!funnelStep || funnelStep.includes('agree')) {
      setStep('agree');
    } else if (funnelStep.includes('email')) {
      setStep('email');
    } else if (funnelStep.includes('name')) {
      setStep('name');
    } else if (funnelStep.includes('id')) {
      setStep('id');
    } else if (funnelStep.includes('password')) {
      setStep('password');
    } else if (funnelStep.includes('finish')) {
      setStep('finish');
    }
  }, [query]);

  useEffect(controllFunnel, [controllFunnel]);

  const onValid: SubmitHandler<JoinFormData> = (data) => {
    const { id, pw, email, name, nickname } = data;
    mutate({ id, pw, email, name, nickname });
  };
  const onInvalid = () => {};

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onValid, onInvalid)}>
        {step === 'agree' && <AgreeForm />}
        {step === 'email' && <EmailForm />}
        {step === 'name' && <NameForm />}
        {step === 'id' && <IdForm />}
        {step === 'password' && <PasswordForm />}
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

import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useForm, FormProvider } from 'react-hook-form';
import DefaultForm from '@src/components/common/DefaultForm';
import { JoinFormData, StepType } from '@src/types/joinTypes';
import EmailForm from '@src/components/organism/join/EmailForm';
import NameForm from '@src/components/organism/join/NameForm';
import { useEffect, useState } from 'react';
import IdForm from '@src/components/organism/join/IdForm';
import PasswordForm from '@src/components/organism/join/PasswrodForm';

function JoinForm() {
  const [step, setStep] = useState<StepType>('email');
  const methods = useForm<JoinFormData>();
  const { query } = useRouter();

  useEffect(() => {
    const funnelStep = query['funnel-step'];
    if (!funnelStep || funnelStep.includes('email')) {
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

  return (
    <FormProvider {...methods}>
      <Form>
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
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default JoinForm;

import { useMutationState } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormErrorWrapper } from '@app/_components/common';
import { JoinFormData } from '@app/_types/joinTypes';
import EmailInput from './EmailInput';
import EmailKeyInput from './EmailKeyInput';

function EmailForm() {
  const {
    formState: { errors, dirtyFields },
    setFocus,
  } = useFormContext<JoinFormData>();
  const emailSendState = useMutationState({
    filters: { mutationKey: ['email'] },
    select: (mutation) => mutation.state.status,
  });

  const isSuccess = emailSendState.at(-1) === 'success';

  const isValidValue = !errors.email && dirtyFields.email;
  useEffect(() => {
    setFocus('email');
  }, [setFocus]);

  return (
    <>
      <EmailInput />
      {isSuccess && <EmailKeyInput />}
      {!isValidValue && (
        <FormErrorWrapper>
          <li>{errors.email?.message}</li>
        </FormErrorWrapper>
      )}
    </>
  );
}

export default EmailForm;

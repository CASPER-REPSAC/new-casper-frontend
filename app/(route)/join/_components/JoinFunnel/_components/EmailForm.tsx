import { FormErrorWrapper, LabelInput } from '@app/_components/common';
import { MailIcon } from '@app/_components/icons';
import { JoinFormData } from '@app/_types/joinTypes';
import { INPUT_ERROR, REQUIRED_MESSAGE } from '@app/_constants/message';
import { ICON_SIZE } from '@app/_constants/size';
import { INPUT_LABEL, PLACEHOLDER } from '@app/_constants/label';
import { EMAIL_REGEX } from '@app/_utils/regex';
import { useFormContext } from 'react-hook-form';
import { useEffect } from 'react';

function EmailForm() {
  const {
    register,
    formState: { errors, dirtyFields },
    setFocus,
  } = useFormContext<JoinFormData>();

  const emailRegister = register('email', {
    required: REQUIRED_MESSAGE.email,
    pattern: {
      value: EMAIL_REGEX,
      message: INPUT_ERROR.email,
    },
  });

  const isValidValue = !errors.email && dirtyFields.email;

  useEffect(() => {
    setFocus('email');
  }, [setFocus]);

  return (
    <>
      <LabelInput
        type="email"
        label={INPUT_LABEL.email}
        labelIcon={<MailIcon size={ICON_SIZE.small} />}
        placeholder={PLACEHOLDER.email}
        hasError={!!errors.email}
        {...emailRegister}
      />

      {!isValidValue && (
        <FormErrorWrapper>
          <li>{errors.email?.message}</li>
        </FormErrorWrapper>
      )}
    </>
  );
}

export default EmailForm;

import {
  DefaultButton,
  FormErrorWrapper,
  LabelInput,
} from 'app/_components/common';
import { MailIcon } from 'app/_components/icons';
import { JoinFormData } from 'app/_types/joinTypes';
import { ERROR_MESSAGE, REQUIRED_MESSAGE } from 'app/_constants/message';
import { ICON_SIZE } from 'app/_constants/size';
import { INPUT_LABEL, PLACEHOLDER } from 'app/_constants/label';
import { EMAIL_REGEX } from 'app/_utils/regex';
import { useFormContext } from 'react-hook-form';
import { useEffect } from 'react';

interface Props {
  onNext: () => void;
}
function EmailForm({ onNext }: Props) {
  const {
    register,
    watch,
    formState: { errors },
    setFocus,
    handleSubmit,
  } = useFormContext<JoinFormData>();

  const emailRegister = register('email', {
    required: REQUIRED_MESSAGE.email,
    pattern: {
      value: EMAIL_REGEX,
      message: ERROR_MESSAGE.email,
    },
  });

  const isValidValue =
    !errors.email && watch('email') !== '' && watch('email') !== undefined;

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
      <DefaultButton
        theme="primary"
        type="submit"
        onClick={handleSubmit(onNext)}
      >
        다음 단계
      </DefaultButton>
    </>
  );
}

export default EmailForm;

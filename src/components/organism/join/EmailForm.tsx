import DefaultButton from '@src/components/common/defaultTag/DefaultButton';
import FormErrorWrapper from '@src/components/common/FormErrorWrapper';
import { MailIcon } from '@src/components/common/icons';
import LabelInput from '@src/components/molecules/Inputs/LabelInput';
import { JoinFormData } from '@src/types/joinTypes';
import { ERROR_MESSAGE, REQUIRED_MESSAGE } from '@src/constants/message';
import { ICON_SIZE } from '@src/constants/size';
import { INPUT_LABEL, PLACEHOLDER } from '@src/constants/label';
import { EMAIL_REGEX } from '@src/utils/regex';
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
        label={INPUT_LABEL.email}
        labelIcon={<MailIcon size={ICON_SIZE.small} />}
        placeholder={PLACEHOLDER.email}
        autoComplete="off"
        hasError={!!errors.email}
        register={emailRegister}
      />
      {!isValidValue && errors.email && (
        <FormErrorWrapper>
          <li>{errors.email.message}</li>
        </FormErrorWrapper>
      )}
      <DefaultButton
        type="submit"
        size="large"
        color="green"
        onClick={handleSubmit(onNext)}
        active={isValidValue}
      >
        다음 단계
      </DefaultButton>
    </>
  );
}

export default EmailForm;
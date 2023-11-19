import DefaultButton from '@src/components/common/DefaultButton';
import FormErrorWrapper from '@src/components/common/FormErrorWrapper';
import { MailIcon } from '@src/components/common/Icons';
import LabelInput from '@src/components/molecules/Inputs/LabelInput';
import { JoinFormData } from '@src/types/joinTypes';
import { ERROR_MESSAGE, REQUIRED_MESSAGE } from '@src/constants/message';
import { ICON_SIZE } from '@src/constants/size';
import { INPUT_LABEL, PLACEHOLDER } from '@src/constants/label';
import { EMAIL_REGEX } from '@src/utils/regex';
import { useFormContext } from 'react-hook-form';

interface Props {
  onNext: () => void;
}

function EmailForm({ onNext }: Props) {
  const NAME = 'email';
  const {
    register,
    watch,
    formState: { errors },
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

  return (
    <>
      <LabelInput
        label={INPUT_LABEL.email}
        labelIcon={<MailIcon size={ICON_SIZE.small} />}
        placeholder={PLACEHOLDER.email}
        autoComplete="off"
        register={emailRegister}
        hasError={!!errors.email}
        onKeyDown={(e) => {
          if (e.key === 'Enter') onNext();
        }}
      />
      {errors[NAME] && (
        <FormErrorWrapper>
          <li>{errors[NAME].message}</li>
        </FormErrorWrapper>
      )}
      <DefaultButton
        size="large"
        color="green"
        onClick={onNext}
        active={isValidValue}
      >
        다음 단계
      </DefaultButton>
    </>
  );
}

export default EmailForm;

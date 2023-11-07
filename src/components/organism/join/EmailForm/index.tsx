import DefaultButton from '@src/components/common/DefaultButton';
import FormErrorWrapper from '@src/components/common/FormErrorWrapper';
import { MailIcon } from '@src/components/common/Icons';
import LabelInput from '@src/components/molecules/Inputs/LabelInput';
import { JoinFormData } from '@src/types/joinTypes';
import { ERROR_MESSAGE, REQUIRED_MESSAGE } from '@src/constants/message';
import { ICON_SIZE } from '@src/constants/size';
import { INPUT_LABEL, PLACEHOLDER } from '@src/constants/label';
import { EMAIL_REGEX } from '@src/utils/regex';
import { PATH } from '@src/constants/urls';
import { useRouter } from 'next/router';
import { SubmitHandler, useFormContext } from 'react-hook-form';

function EmailForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useFormContext<JoinFormData>();
  const router = useRouter();

  const emailRegister = register('email', {
    required: REQUIRED_MESSAGE.email,
    pattern: {
      value: EMAIL_REGEX,
      message: ERROR_MESSAGE.email,
    },
  });

  const onValid: SubmitHandler<JoinFormData> = () => {
    const nextStep = 'name';
    router.push({
      pathname: PATH.user.join.url,
      query: { 'funnel-step': nextStep },
    });
  };

  const buttonActive =
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
      />
      {errors.email && (
        <FormErrorWrapper>
          <li>{errors.email.message}</li>
        </FormErrorWrapper>
      )}
      <DefaultButton
        size="large"
        color="green"
        onClick={handleSubmit(onValid)}
        active={buttonActive}
      >
        다음 단계
      </DefaultButton>
    </>
  );
}

export default EmailForm;

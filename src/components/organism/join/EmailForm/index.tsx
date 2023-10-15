import DefaultButton from '@src/components/common/DefaultButton';
import FormErrorWrapper from '@src/components/common/FormErrorWrapper';
import LabelInput from '@src/components/molecules/Inputs/LabelInput';
import { JoinFormData } from '@src/types/joinTypes';
import {
  ERROR_MESSAGE,
  INPUT_LABEL,
  PLACEHOLDER,
  REQUIRED_MESSAGE,
} from '@src/utils/constants';
import { EMAIL_REGEX } from '@src/utils/regex';
import { PATH } from '@src/utils/urls';
import { useRouter } from 'next/router';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { AiOutlineMail } from 'react-icons/ai';

function EmailForm() {
  const {
    register,
    handleSubmit,
    getValues,
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

  const buttonActive = !(
    Object.keys(errors).includes('email') ||
    errors === undefined ||
    getValues('email') === ''
  );

  return (
    <>
      <LabelInput
        label={INPUT_LABEL.email}
        labelIcon={<AiOutlineMail size={25} />}
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
        type="large"
        onClick={handleSubmit(onValid)}
        active={buttonActive}
      >
        다음 단계
      </DefaultButton>
    </>
  );
}

export default EmailForm;

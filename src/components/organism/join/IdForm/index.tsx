import { useRouter } from 'next/router';
import DefaultButton from '@src/components/common/DefaultButton';
import FormErrorWrapper from '@src/components/common/FormErrorWrapper';
import { UserIcon } from '@src/components/common/Icons';
import LabelInput from '@src/components/molecules/Inputs/LabelInput';
import { JoinFormData } from '@src/types/joinTypes';
import { ERROR_MESSAGE, REQUIRED_MESSAGE } from '@src/constants/message';
import { INPUT_LABEL, PLACEHOLDER } from '@src/constants/label';
import { PATH } from '@src/constants/urls';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { ID_REGEX } from '@src/utils/regex';

function IdForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useFormContext<JoinFormData>();
  const router = useRouter();

  const idRegister = register('id', {
    required: REQUIRED_MESSAGE.id,
    pattern: {
      value: ID_REGEX,
      message: ERROR_MESSAGE.id,
    },
  });

  const onValid: SubmitHandler<JoinFormData> = () => {
    const nextStep = 'password';
    router.push({
      pathname: PATH.user.join.url,
      query: { 'funnel-step': nextStep },
    });
  };

  const buttonActive =
    !errors.id && watch('id') !== '' && watch('id') !== undefined;

  return (
    <>
      <LabelInput
        label={INPUT_LABEL.id}
        labelIcon={<UserIcon size={25} />}
        register={idRegister}
        placeholder={PLACEHOLDER.id}
        hasError={!!errors.id}
      />
      {errors.id && (
        <FormErrorWrapper>
          <li>{errors.id?.message}</li>
        </FormErrorWrapper>
      )}
      <DefaultButton
        size="large"
        color="green"
        onClick={handleSubmit(onValid)}
        active={buttonActive}
      >
        완료
      </DefaultButton>
    </>
  );
}

export default IdForm;

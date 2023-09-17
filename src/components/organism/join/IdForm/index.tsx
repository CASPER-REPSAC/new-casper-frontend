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
import { ID_REGEX } from '@src/utils/regex';
import { PATH } from '@src/utils/urls';
import { useRouter } from 'next/router';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { AiOutlineUser } from 'react-icons/ai';

function IdForm() {
  const {
    register,
    handleSubmit,
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

  return (
    <>
      <LabelInput
        label={INPUT_LABEL.id}
        labelIcon={<AiOutlineUser size={25} />}
        register={idRegister}
        placeholder={PLACEHOLDER.id}
        hasError={!!errors.id}
      />
      {errors.id && (
        <FormErrorWrapper>
          <li>{errors.id?.message}</li>
        </FormErrorWrapper>
      )}
      <DefaultButton type="large" onClick={handleSubmit(onValid)}>
        완료
      </DefaultButton>
    </>
  );
}

export default IdForm;

import DefaultButton from '@src/components/common/DefaultButton';
import LabelInput from '@src/components/molecules/Inputs/LabelInput';
import { JoinFormData } from '@src/types/joinTypes';
import {
  ERROR_MESSAGE,
  INPUT_LABEL,
  PLACEHOLDER,
  REQUIRED_MESSAGE,
} from '@src/utils/constants';
import { NAME_REGEX, NICKNAME_REGEX } from '@src/utils/regex';
import { PATH } from '@src/utils/urls';
import { useRouter } from 'next/router';
import { useFormContext } from 'react-hook-form';
import { AiFillStar } from 'react-icons/ai';
import { CgRename } from 'react-icons/Cg';

function NameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext<JoinFormData>();
  const router = useRouter();

  const nameRegister = register('name', {
    required: REQUIRED_MESSAGE.name,
    pattern: {
      value: NAME_REGEX,
      message: ERROR_MESSAGE.name,
    },
  });

  const nickNameRegister = register('nickname', {
    required: REQUIRED_MESSAGE.nickname,
    pattern: {
      value: NICKNAME_REGEX,
      message: ERROR_MESSAGE.nickname,
    },
  });

  const onValid = () => {
    const nextStep = 'id';
    router.push({
      pathname: PATH.user.join.url,
      query: { 'funnel-step': nextStep },
    });
  };

  return (
    <>
      <LabelInput
        label={INPUT_LABEL.name}
        labelIcon={<CgRename size={25} />}
        placeholder={PLACEHOLDER.name}
        autoComplete="off"
        register={nameRegister}
        hasError={!!errors.name}
      />
      <LabelInput
        label={INPUT_LABEL.nickname}
        labelIcon={<AiFillStar size={25} />}
        placeholder={PLACEHOLDER.nickname}
        autoComplete="off"
        register={nickNameRegister}
        hasError={!!errors.nickname}
      />
      <DefaultButton type="large" onClick={handleSubmit(onValid)}>
        다음 단계
      </DefaultButton>
    </>
  );
}

export default NameForm;

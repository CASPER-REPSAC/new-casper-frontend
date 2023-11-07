import DefaultButton from '@src/components/common/DefaultButton';
import { StarIcon, UserIcon } from '@src/components/common/Icons';
import LabelInput from '@src/components/molecules/Inputs/LabelInput';
import { JoinFormData } from '@src/types/joinTypes';

import { REQUIRED_MESSAGE, ERROR_MESSAGE } from '@src/constants/message';

import { NAME_REGEX, NICKNAME_REGEX } from '@src/utils/regex';
import { PATH } from '@src/constants/urls';
import { useRouter } from 'next/router';
import { useFormContext } from 'react-hook-form';
import { INPUT_LABEL, PLACEHOLDER } from '@src/constants/label';
import { ICON_SIZE } from '@src/constants/size';

function NameForm() {
  const {
    register,
    handleSubmit,
    watch,
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

  const buttonActive =
    !errors.name &&
    !errors.nickname &&
    watch('name') !== '' &&
    watch('nickname') !== '' &&
    watch('name') !== undefined &&
    watch('nickname') !== undefined;

  return (
    <>
      <LabelInput
        label={INPUT_LABEL.name}
        labelIcon={<UserIcon size={ICON_SIZE.small} />}
        placeholder={PLACEHOLDER.name}
        autoComplete="off"
        register={nameRegister}
        hasError={!!errors.name}
      />
      <LabelInput
        label={INPUT_LABEL.nickname}
        labelIcon={<StarIcon size={ICON_SIZE.small} />}
        placeholder={PLACEHOLDER.nickname}
        autoComplete="off"
        register={nickNameRegister}
        hasError={!!errors.nickname}
      />
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

export default NameForm;

import DefaultButton from '@src/components/common/DefaultButton';
import { StarIcon, UserIcon } from '@src/components/common/Icons';
import LabelInput from '@src/components/molecules/Inputs/LabelInput';
import { JoinFormData } from '@src/types/joinTypes';
import { REQUIRED_MESSAGE, ERROR_MESSAGE } from '@src/constants/message';
import { NAME_REGEX, NICKNAME_REGEX } from '@src/utils/regex';
import { useFormContext } from 'react-hook-form';
import { INPUT_LABEL, PLACEHOLDER } from '@src/constants/label';
import { ICON_SIZE } from '@src/constants/size';
import FormErrorWrapper from '@src/components/common/FormErrorWrapper';

interface Props {
  onNext: () => void;
}

function NameForm({ onNext }: Props) {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<JoinFormData>();

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

  const isValidValue =
    !errors.name &&
    !errors.nickname &&
    watch('name') !== '' &&
    watch('name') !== undefined &&
    watch('nickname') !== '' &&
    watch('nickname') !== undefined;

  return (
    <>
      <LabelInput
        label={INPUT_LABEL.name}
        labelIcon={<UserIcon size={ICON_SIZE.small} />}
        placeholder={PLACEHOLDER.name}
        register={nameRegister}
        hasError={!!errors.name}
        autoComplete="off"
      />
      <LabelInput
        label={INPUT_LABEL.nickname}
        labelIcon={<StarIcon size={ICON_SIZE.small} />}
        placeholder={PLACEHOLDER.nickname}
        register={nickNameRegister}
        hasError={!!errors.nickname}
        autoComplete="off"
      />
      {!isValidValue && (
        <FormErrorWrapper>
          {errors.name && <li>{errors.name.message}</li>}
          {errors.nickname && <li>{errors.nickname.message}</li>}
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

export default NameForm;

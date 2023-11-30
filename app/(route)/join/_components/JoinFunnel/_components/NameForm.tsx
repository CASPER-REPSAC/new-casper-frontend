import { useEffect } from 'react';
import { DefaultButton } from 'app/_components/common/defaultTag';
import { StarIcon, UserIcon } from '@src/components/common/icons';
import { LabelInput } from '@src/components/common/featureTag';
import { JoinFormData } from '@src/types/joinTypes';
import { REQUIRED_MESSAGE, ERROR_MESSAGE } from 'app/_constants/message';
import { NAME_REGEX, NICKNAME_REGEX } from '@src/utils/regex';
import { useFormContext } from 'react-hook-form';
import { INPUT_LABEL, PLACEHOLDER } from 'app/_constants/label';
import { ICON_SIZE } from 'app/_constants/size';
import { FormErrorWrapper } from '@src/components/common/';

interface Props {
  onNext: () => void;
}

function NameForm({ onNext }: Props) {
  const {
    register,
    formState: { errors },
    setFocus,
    getValues,
    handleSubmit,
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
    getValues('name') !== '' &&
    getValues('name') !== undefined &&
    getValues('nickname') !== '' &&
    getValues('nickname') !== undefined;

  useEffect(() => {
    setFocus('name');
  }, [setFocus]);

  return (
    <>
      <LabelInput
        label={INPUT_LABEL.name}
        labelIcon={<UserIcon size={ICON_SIZE.small} />}
        placeholder={PLACEHOLDER.name}
        {...nameRegister}
        hasError={!!errors.name}
        autoComplete="off"
      />
      <LabelInput
        label={INPUT_LABEL.nickname}
        labelIcon={<StarIcon size={ICON_SIZE.small} />}
        placeholder={PLACEHOLDER.nickname}
        {...nickNameRegister}
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
        $size="large"
        $color="green"
        $active={isValidValue}
        type="submit"
        onClick={handleSubmit(onNext)}
      >
        다음 단계
      </DefaultButton>
    </>
  );
}

export default NameForm;

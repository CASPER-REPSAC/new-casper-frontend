import { useEffect } from 'react';
import {
  DefaultButton,
  FormErrorWrapper,
  LabelInput,
} from 'app/_components/common';
import { StarIcon, UserIcon } from 'app/_components/icons';
import { JoinFormData } from 'app/_types/joinTypes';
import { REQUIRED_MESSAGE } from 'app/_constants/message';
import { useFormContext } from 'react-hook-form';
import { INPUT_LABEL, PLACEHOLDER } from 'app/_constants/label';
import { ICON_SIZE } from 'app/_constants/size';

interface Props {
  onNext: () => void;
}

function NameForm({ onNext }: Props) {
  const {
    register,
    formState: { errors },
    setFocus,
    handleSubmit,
  } = useFormContext<JoinFormData>();

  const nameRegister = register('name', {
    required: REQUIRED_MESSAGE.name,
  });

  const nickNameRegister = register('nickname', {
    required: REQUIRED_MESSAGE.nickname,
  });

  const isValidValue = !errors.name && !errors.nickname;

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
        theme="green"
        type="submit"
        disabled={!isValidValue}
        onClick={handleSubmit(onNext)}
      >
        다음 단계
      </DefaultButton>
    </>
  );
}

export default NameForm;

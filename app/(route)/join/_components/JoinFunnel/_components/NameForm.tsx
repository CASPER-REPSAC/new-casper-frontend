import { useEffect } from 'react';
import { FormErrorWrapper, LabelInput } from 'app/_components/common';
import { StarIcon, UserIcon } from 'app/_components/icons';
import { JoinFormData } from 'app/_types/joinTypes';
import { REQUIRED_MESSAGE } from 'app/_constants/message';
import { useFormContext } from 'react-hook-form';
import { INPUT_LABEL, PLACEHOLDER } from 'app/_constants/label';
import { ICON_SIZE } from 'app/_constants/size';

function NameForm() {
  const {
    register,
    formState: { errors, dirtyFields },
    setFocus,
  } = useFormContext<JoinFormData>();

  const nameRegister = register('name', {
    required: REQUIRED_MESSAGE.name,
  });

  const nickNameRegister = register('nickname', {
    required: REQUIRED_MESSAGE.nickname,
  });

  const isValidValue =
    !errors.name &&
    !errors.nickname &&
    dirtyFields.name &&
    dirtyFields.nickname;

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
    </>
  );
}

export default NameForm;

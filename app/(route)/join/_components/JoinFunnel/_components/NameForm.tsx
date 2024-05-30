import { useEffect } from 'react';
import { FormErrorWrapper } from '@app/_components/common';
import { JoinFormData } from '@app/_types/joinTypes';
import { REQUIRED_MESSAGE } from '@app/_constants/message';
import { useFormContext } from 'react-hook-form';
import { INPUT_LABEL, PLACEHOLDER } from '@app/_constants/label';
import { Input } from '@app/_shadcn/components/ui/input';

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
      <Input
        label={INPUT_LABEL.name}
        placeholder={PLACEHOLDER.name}
        {...nameRegister}
        color={errors.name ? 'danger' : 'default'}
        autoComplete="off"
      />
      <Input
        label={INPUT_LABEL.nickname}
        placeholder={PLACEHOLDER.nickname}
        {...nickNameRegister}
        color={errors.nickname ? 'danger' : 'default'}
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

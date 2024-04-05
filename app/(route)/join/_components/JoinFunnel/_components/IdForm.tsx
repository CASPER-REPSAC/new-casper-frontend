import { FormErrorWrapper } from '@app/_components/common';
import { UserIcon } from '@app/_components/icons';
import { JoinFormData } from '@app/_types/joinTypes';
import { REQUIRED_MESSAGE } from '@app/_constants/message';
import { INPUT_LABEL, PLACEHOLDER } from '@app/_constants/label';
import { useFormContext } from 'react-hook-form';
import { useEffect } from 'react';
import { Input } from '@nextui-org/react';

function IdForm() {
  const {
    register,
    formState: { errors },
    setFocus,
  } = useFormContext<JoinFormData>();

  const idRegister = register('id', {
    required: REQUIRED_MESSAGE.id,
  });

  useEffect(() => {
    setFocus('id');
  }, [setFocus]);

  return (
    <>
      <Input
        size="lg"
        isRequired
        label={INPUT_LABEL.id}
        startContent={<UserIcon size={25} />}
        {...idRegister}
        placeholder={PLACEHOLDER.id}
        color={errors.id ? 'danger' : 'default'}
      />
      {errors.id && (
        <FormErrorWrapper>
          <li>{errors.id?.message}</li>
        </FormErrorWrapper>
      )}
    </>
  );
}

export default IdForm;

import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormErrorWrapper } from '@app/_components/common';
import { INPUT_LABEL, PLACEHOLDER } from '@app/_constants/label';
import { REQUIRED_MESSAGE } from '@app/_constants/message';
import { JoinFormData } from '@app/_types/joinTypes';
import { Input } from '@app/_shadcn/components/ui/input';

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
        label={INPUT_LABEL.id}
        {...idRegister}
        placeholder={PLACEHOLDER.id}
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

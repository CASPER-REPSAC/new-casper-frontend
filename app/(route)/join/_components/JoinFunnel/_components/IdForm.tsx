import {
  DefaultButton,
  FormErrorWrapper,
  LabelInput,
} from 'app/_components/common';
import { UserIcon } from 'app/_components/icons';
import { JoinFormData } from 'app/_types/joinTypes';
import { REQUIRED_MESSAGE } from 'app/_constants/message';
import { INPUT_LABEL, PLACEHOLDER } from 'app/_constants/label';
import { useFormContext } from 'react-hook-form';
import { useEffect } from 'react';

interface Props {
  onNext: () => void;
}

function IdForm({ onNext }: Props) {
  const {
    register,
    watch,
    formState: { errors },
    setFocus,
  } = useFormContext<JoinFormData>();

  const idRegister = register('id', {
    required: REQUIRED_MESSAGE.id,
  });

  const isValidValue =
    !errors.id && watch('id') !== '' && watch('id') !== undefined;

  useEffect(() => {
    setFocus('id');
  }, [setFocus]);

  return (
    <>
      <LabelInput
        label={INPUT_LABEL.id}
        labelIcon={<UserIcon size={25} />}
        {...idRegister}
        placeholder={PLACEHOLDER.id}
        hasError={!!errors.id}
      />
      {errors.id && (
        <FormErrorWrapper>
          <li>{errors.id?.message}</li>
        </FormErrorWrapper>
      )}
      <DefaultButton
        theme="green"
        type="submit"
        disabled={!isValidValue}
        onClick={onNext}
      >
        다음 단계
      </DefaultButton>
    </>
  );
}

export default IdForm;

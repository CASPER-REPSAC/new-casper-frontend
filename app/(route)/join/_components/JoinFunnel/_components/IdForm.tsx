import { DefaultButton } from 'app/_components/defaultTag';
import { FormErrorWrapper } from '@src/components/common/';
import { UserIcon } from 'app/_components/icons';
import { LabelInput } from '@src/components/common/featureTag';
import { JoinFormData } from 'app/_types/joinTypes';
import { ERROR_MESSAGE, REQUIRED_MESSAGE } from 'app/_constants/message';
import { INPUT_LABEL, PLACEHOLDER } from 'app/_constants/label';
import { useFormContext } from 'react-hook-form';
import { ID_REGEX } from '@src/utils/regex';
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
    pattern: {
      value: ID_REGEX,
      message: ERROR_MESSAGE.id,
    },
  });

  const isValudValue =
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
        $size="large"
        $color="green"
        $active={isValudValue}
        onClick={onNext}
      >
        완료
      </DefaultButton>
    </>
  );
}

export default IdForm;

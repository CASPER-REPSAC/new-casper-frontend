import { useFormContext } from 'react-hook-form';
import DefaultButton from '@src/components/common/defaultTag/DefaultButton';
import LabelInput from '@src/components/molecules/Inputs/LabelInput';
import { JoinFormData } from '@src/types/joinTypes';
import { PW_REGEX } from '@src/utils/regex';
import FormErrorWrapper from '@src/components/common/FormErrorWrapper';
import { CheckSquareIcon } from '@src/components/common/icons';
import { ERROR_MESSAGE, REQUIRED_MESSAGE } from '@src/constants/message';
import { INPUT_LABEL, PLACEHOLDER } from '@src/constants/label';
import { ICON_SIZE } from '@src/constants/size';

interface Props {
  onNext: () => void;
}

function PasswordForm({ onNext }: Props) {
  const {
    register,
    getValues,
    watch,
    formState: { errors },
    handleSubmit,
  } = useFormContext<JoinFormData>();

  const pwRegister = register('pw', {
    required: REQUIRED_MESSAGE.pw,
    pattern: {
      value: PW_REGEX,
      message: ERROR_MESSAGE.pw,
    },
  });
  const pwConfirmRegister = register('pwConfirm', {
    required: REQUIRED_MESSAGE.pwConfirm,
    validate: {
      check: (val) => {
        return getValues('pw') === val || ERROR_MESSAGE.pwConfirm;
      },
    },
  });

  const isValidValue =
    !errors.pw &&
    !errors.pwConfirm &&
    watch('pw') !== '' &&
    watch('pwConfirm') !== '' &&
    watch('pw') !== undefined &&
    watch('pwConfirm') !== undefined;

  return (
    <>
      <LabelInput
        label={INPUT_LABEL.pw}
        labelIcon={<CheckSquareIcon size={ICON_SIZE.small} />}
        register={pwRegister}
        placeholder={PLACEHOLDER.pw}
        type="password"
        autoComplete="off"
        hasError={!!errors.pw}
      />
      <LabelInput
        label={INPUT_LABEL.pwConfirm}
        labelIcon={<CheckSquareIcon size={ICON_SIZE.small} />}
        register={pwConfirmRegister}
        hasError={!!errors.pwConfirm}
        placeholder={PLACEHOLDER.pwConfirm}
        autoComplete="off"
        type="password"
      />
      {!isValidValue && (
        <FormErrorWrapper>
          {errors.pw && <li>{errors.pw.message}</li>}
          {errors.pwConfirm && <li>{errors.pwConfirm.message}</li>}
        </FormErrorWrapper>
      )}
      <DefaultButton
        type="submit"
        size="large"
        color="green"
        active={isValidValue}
        onClick={handleSubmit(onNext)}
      >
        완료
      </DefaultButton>
    </>
  );
}

export default PasswordForm;

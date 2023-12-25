import { useFormContext } from 'react-hook-form';
import { LabelInput, FormErrorWrapper } from '@app/_components/common';
import { JoinFormData } from '@app/_types/joinTypes';
import { PW_REGEX } from '@app/_utils/regex';
import { CheckSquareIcon } from '@app/_components/icons';
import { ERROR_MESSAGE, REQUIRED_MESSAGE } from '@app/_constants/message';
import { INPUT_LABEL, PLACEHOLDER } from '@app/_constants/label';
import { ICON_SIZE } from '@app/_constants/size';

function PasswordForm() {
  const {
    register,
    getValues,
    formState: { errors, dirtyFields },
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
    !errors.pw && !errors.pwConfirm && dirtyFields.pw && dirtyFields.pwConfirm;

  return (
    <>
      <LabelInput
        label={INPUT_LABEL.pw}
        labelIcon={<CheckSquareIcon size={ICON_SIZE.small} />}
        {...pwRegister}
        placeholder={PLACEHOLDER.pw}
        type="password"
        autoComplete="off"
        hasError={!!errors.pw}
      />
      <LabelInput
        label={INPUT_LABEL.pwConfirm}
        labelIcon={<CheckSquareIcon size={ICON_SIZE.small} />}
        {...pwConfirmRegister}
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
    </>
  );
}

export default PasswordForm;

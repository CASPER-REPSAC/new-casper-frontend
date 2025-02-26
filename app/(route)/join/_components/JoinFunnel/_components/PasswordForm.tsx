import { useFormContext } from 'react-hook-form';
import { FormErrorWrapper } from '@app/_components/common';
import { PW_REGEX } from '@app/_utils/regex';
import { INPUT_LABEL, PLACEHOLDER } from '@app/_constants/label';
import { INPUT_ERROR, REQUIRED_MESSAGE } from '@app/_constants/message';
import { JoinFormData } from '@app/_types/joinTypes';
import { Input } from '@app/_shadcn/components/ui/input';

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
      message: INPUT_ERROR.pw,
    },
  });
  const pwConfirmRegister = register('pwConfirm', {
    required: REQUIRED_MESSAGE.pwConfirm,
    validate: {
      check: (val) => {
        return getValues('pw') === val || INPUT_ERROR.pwConfirm;
      },
    },
  });

  const isValidValue =
    !errors.pw && !errors.pwConfirm && dirtyFields.pw && dirtyFields.pwConfirm;

  return (
    <>
      <Input
        label={INPUT_LABEL.pw}
        {...pwRegister}
        placeholder={PLACEHOLDER.pw}
        type="password"
        autoComplete="off"
      />
      <Input
        label={INPUT_LABEL.pwConfirm}
        {...pwConfirmRegister}
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

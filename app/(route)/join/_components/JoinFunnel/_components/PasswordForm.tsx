import { useFormContext } from 'react-hook-form';
import { FormErrorWrapper } from '@app/_components/common';
import { JoinFormData } from '@app/_types/joinTypes';
import { PW_REGEX } from '@app/_utils/regex';
import { CheckSquareIcon } from '@app/_components/icons';
import { INPUT_ERROR, REQUIRED_MESSAGE } from '@app/_constants/message';
import { INPUT_LABEL, PLACEHOLDER } from '@app/_constants/label';
import { ICON_SIZE } from '@app/_constants/size';
import { Input } from '@nextui-org/react';

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
        isRequired
        size="lg"
        label={INPUT_LABEL.pw}
        startContent={<CheckSquareIcon size={ICON_SIZE.small} />}
        {...pwRegister}
        placeholder={PLACEHOLDER.pw}
        type="password"
        autoComplete="off"
        color={errors.pw ? 'danger' : 'default'}
      />
      <Input
        isRequired
        size="lg"
        label={INPUT_LABEL.pwConfirm}
        startContent={<CheckSquareIcon size={ICON_SIZE.small} />}
        {...pwConfirmRegister}
        color={errors.pwConfirm ? 'danger' : 'default'}
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

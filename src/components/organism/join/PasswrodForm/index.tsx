import { SubmitHandler, useFormContext } from 'react-hook-form';
import DefaultButton from '@src/components/common/DefaultButton';
import LabelInput from '@src/components/molecules/Inputs/LabelInput';
import { JoinFormData } from '@src/types/joinTypes';
import { PW_REGEX } from '@src/utils/regex';
import FormErrorWrapper from '@src/components/common/FormErrorWrapper';
import useJoinMutation from '@src/hooks/apis/useJoinMutation';
import { useCallback, useEffect } from 'react';
import usePopup from '@src/hooks/usePopup';
import { CheckSquareIcon } from '@src/components/common/Icons';
import {
  ERROR_MESSAGE,
  POPUP_MESSAGE,
  REQUIRED_MESSAGE,
} from '@src/constants/message';
import { INPUT_LABEL, PLACEHOLDER } from '@src/constants/label';
import { POPUP_DURATION } from '@src/constants/duration';
import { ICON_SIZE } from '@src/constants/size';

function PasswordForm() {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useFormContext<JoinFormData>();
  const { mutate, isSuccess } = useJoinMutation();
  const { openAndDeletePopup } = usePopup();

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

  const onValid: SubmitHandler<JoinFormData> = (data) => {
    const { id, pw, email, name, nickname } = data;
    mutate({ id, pw, email, name, nickname });
  };

  // util 또는 hooks로 분리 할지 고민 필요한 함수
  const redirectAndNotice = useCallback(() => {
    if (!isSuccess) {
      return;
    }
    openAndDeletePopup({
      key: Date.now(),
      message: POPUP_MESSAGE.succeedJoin,
      duration: POPUP_DURATION.medium,
    });
  }, [isSuccess, openAndDeletePopup]);

  useEffect(() => redirectAndNotice(), [redirectAndNotice]);

  const buttonActive =
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
      {!buttonActive && (
        <FormErrorWrapper>
          {errors.pw && <li>{errors.pw.message}</li>}
          {errors.pwConfirm && <li>{errors.pwConfirm.message}</li>}
        </FormErrorWrapper>
      )}
      <DefaultButton
        size="large"
        color="green"
        onClick={handleSubmit(onValid)}
        active={buttonActive}
      >
        완료
      </DefaultButton>
    </>
  );
}

export default PasswordForm;

import { SubmitHandler, useFormContext } from 'react-hook-form';
import { AiOutlineCheckSquare } from 'react-icons/ai';
import DefaultButton from '@src/components/common/DefaultButton';
import LabelInput from '@src/components/molecules/Inputs/LabelInput';
import { JoinFormData } from '@src/types/joinTypes';
import { PW_REGEX } from '@src/utils/regex';
import {
  ERROR_MESSAGE,
  INPUT_LABEL,
  PLACEHOLDER,
  POPUP_MESSAGE,
  POPUP_TIME,
  REQUIRED_MESSAGE,
} from '@src/utils/constants';
import FormErrorWrapper from '@src/components/common/FormErrorWrapper';
import useJoinMutation from '@src/hooks/apis/useJoinMutation';
import { useCallback, useEffect } from 'react';
import usePopup from '@src/hooks/usePopup';

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
      time: POPUP_TIME.medium,
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
        labelIcon={<AiOutlineCheckSquare size={25} />}
        register={pwRegister}
        placeholder={PLACEHOLDER.pw}
        type="password"
        hasError={!!errors.pw}
      />
      <LabelInput
        label={INPUT_LABEL.pwConfirm}
        labelIcon={<AiOutlineCheckSquare size={25} />}
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
        type="large"
        onClick={handleSubmit(onValid)}
        active={buttonActive}
      >
        완료
      </DefaultButton>
    </>
  );
}

export default PasswordForm;

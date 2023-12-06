import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { usePopup } from 'app/_hooks';
import { DefaultButton, LabelInput } from 'app/_components/common';
import { LockIcon, UserIcon } from 'app/_components/icons';
import { REQUIRED_MESSAGE } from 'app/_constants/message';
import { ICON_SIZE } from 'app/_constants/size';
import { PLACEHOLDER } from 'app/_constants/label';
import { POPUP_DURATION } from 'app/_constants/duration';
import { LoginRequest } from 'app/_types/loginTypes';
import { useLoginMutation } from 'app/_hooks/apis/user';

function LoginForm() {
  const { register, handleSubmit } = useForm<LoginRequest>();
  const { mutate, isPending } = useLoginMutation();
  const { openAndDeletePopup } = usePopup();
  const idRegister = register('id', { required: REQUIRED_MESSAGE.id });
  const pwRegister = register('pw', { required: REQUIRED_MESSAGE.pw });

  const onValid: SubmitHandler<LoginRequest> = async (data) => {
    mutate(data);
  };

  const onInvalid: SubmitErrorHandler<LoginRequest> = (errors) => {
    if (errors.id && errors.id.message) {
      openAndDeletePopup({
        message: errors.id.message,
        duration: POPUP_DURATION.medium,
      });
    } else if (errors.pw && errors.pw.message) {
      openAndDeletePopup({
        message: errors.pw.message,
        duration: POPUP_DURATION.medium,
      });
    }
  };

  return (
    <form className="small-center flex flex-col gap-1">
      <LabelInput
        labelIcon={<UserIcon size={ICON_SIZE.small} />}
        {...idRegister}
        placeholder={PLACEHOLDER.id}
      />
      <LabelInput
        labelIcon={<LockIcon size={ICON_SIZE.small} />}
        {...pwRegister}
        placeholder={PLACEHOLDER.pw}
        type="password"
        autoComplete="off"
      />
      <DefaultButton
        type="submit"
        theme="primary"
        className="mt-3 w-full"
        onClick={handleSubmit(onValid, onInvalid)}
        disabled={isPending}
      >
        로그인
      </DefaultButton>
    </form>
  );
}

export default LoginForm;

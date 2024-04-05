import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { usePopup } from '@app/_hooks';
import { LockIcon, UserIcon } from '@app/_components/icons';
import { ERROR_MESSAGE, REQUIRED_MESSAGE } from '@app/_constants/message';
import { ICON_SIZE } from '@app/_constants/size';
import { PLACEHOLDER } from '@app/_constants/label';
import { POPUP_DURATION } from '@app/_constants/duration';
import { LoginRequest } from '@app/_types/loginTypes';
import { useLoginMutation } from '@app/_hooks/apis/user';
import { Button, Input } from '@nextui-org/react';

function LoginForm() {
  const { register, handleSubmit } = useForm<LoginRequest>();
  const { mutate, isPending } = useLoginMutation();
  const { openAndDeletePopup } = usePopup();
  const idRegister = register('id', { required: REQUIRED_MESSAGE.id });
  const pwRegister = register('pw', { required: REQUIRED_MESSAGE.pw });

  const onValid: SubmitHandler<LoginRequest> = async (params) => {
    mutate(params);
  };

  const onInvalid: SubmitErrorHandler<LoginRequest> = (errors) => {
    if (errors.id && errors.id.message) {
      openAndDeletePopup({
        message: errors.id.message,
        duration: POPUP_DURATION.medium,
      });
      return;
    }
    if (errors.pw && errors.pw.message) {
      openAndDeletePopup({
        message: errors.pw.message,
        duration: POPUP_DURATION.medium,
      });
      return;
    }
    openAndDeletePopup({
      message: ERROR_MESSAGE.unknown,
      duration: POPUP_DURATION.medium,
    });
  };

  return (
    <form className="small-center flex flex-col gap-1">
      <Input
        size="lg"
        startContent={<UserIcon size={ICON_SIZE.small} />}
        {...idRegister}
        placeholder={PLACEHOLDER.id}
      />
      <Input
        size="lg"
        startContent={<LockIcon size={ICON_SIZE.small} />}
        {...pwRegister}
        placeholder={PLACEHOLDER.pw}
        type="password"
        autoComplete="off"
      />
      <Button
        size="lg"
        color="primary"
        type="submit"
        className="mt-3 w-full"
        onClick={handleSubmit(onValid, onInvalid)}
        isLoading={isPending}
      >
        로그인
      </Button>
    </form>
  );
}

export default LoginForm;

import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { usePopup } from '@app/_hooks';
import { ERROR_MESSAGE, REQUIRED_MESSAGE } from '@app/_constants/message';
import { PLACEHOLDER } from '@app/_constants/label';
import { POPUP_DURATION } from '@app/_constants/duration';
import { LoginRequest } from '@app/_types/loginTypes';
import { useLoginMutation } from '@app/_hooks/apis/user';
import { Form } from '@app/_shadcn/components/ui/form';
import { Input } from '@app/_shadcn/components/ui/input';
import { Button } from '@app/_shadcn/components/ui/button';

function LoginForm() {
  const methods = useForm<LoginRequest>();
  const { register, handleSubmit } = methods;
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
    <Form {...methods}>
      <form className="small-center flex flex-col gap-1">
        <Input placeholder={PLACEHOLDER.id} {...idRegister} />
        <Input
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
          disabled={isPending}
        >
          로그인
        </Button>
      </form>
    </Form>
  );
}

export default LoginForm;

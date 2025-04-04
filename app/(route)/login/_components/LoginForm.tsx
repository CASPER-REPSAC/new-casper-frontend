import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { useLoginMutation } from '@app/_hooks/apis/user';
import { PLACEHOLDER } from '@app/_constants/label';
import {
  ERROR_MESSAGE,
  REQUIRED_MESSAGE,
  TOAST_TITLE,
} from '@app/_constants/message';
import { LoginRequest } from '@app/_types/loginTypes';
import { Button } from '@app/_shadcn/components/ui/button';
import { Form } from '@app/_shadcn/components/ui/form';
import { Input } from '@app/_shadcn/components/ui/input';
import { useToast } from '@app/_shadcn/components/ui/use-toast';

function LoginForm() {
  const methods = useForm<LoginRequest>();
  const { register, handleSubmit } = methods;
  const { mutate, isPending } = useLoginMutation();
  const { toast } = useToast();
  const idRegister = register('id', { required: REQUIRED_MESSAGE.id });
  const pwRegister = register('pw', { required: REQUIRED_MESSAGE.pw });

  const onValid: SubmitHandler<LoginRequest> = async (params) => {
    mutate(params);
  };

  const onInvalid: SubmitErrorHandler<LoginRequest> = (errors) => {
    if (errors.id && errors.id.message) {
      toast({
        variant: 'destructive',
        title: TOAST_TITLE.error,
        description: errors.id.message,
      });
      return;
    }
    if (errors.pw && errors.pw.message) {
      toast({
        variant: 'destructive',
        title: TOAST_TITLE.error,
        description: errors.pw.message,
      });
      return;
    }
    toast({
      variant: 'destructive',
      title: TOAST_TITLE.error,
      description: ERROR_MESSAGE.unknown,
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

'use client';

import { INPUT_ERROR, REQUIRED_MESSAGE } from '@app/_constants/message';
import useUpdatePasswordMutation from '@app/_hooks/apis/user/useUpdatePassworMutation';
import { Button } from '@app/_shadcn/components/ui/button';
import { Input } from '@app/_shadcn/components/ui/input';
import { PW_REGEX } from '@app/_utils/regex';
import { SubmitHandler, useForm } from 'react-hook-form';

interface UpdatePasswordForm {
  newPassword: string;
  newPasswordConfirm: string;
}

function Page() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<UpdatePasswordForm>();

  const { mutate } = useUpdatePasswordMutation();

  const newPasswordRegister = register('newPassword', {
    required: REQUIRED_MESSAGE.pw,
    pattern: { value: PW_REGEX, message: INPUT_ERROR.pw },
  });

  const newPasswordConfirmRegister = register('newPasswordConfirm', {
    required: REQUIRED_MESSAGE.pwConfirm,
    validate: (newPasswordConfirm) => {
      if (getValues('newPassword') !== newPasswordConfirm)
        return INPUT_ERROR.pwConfirm;
      return true;
    },
  });

  const onSubmitValid: SubmitHandler<UpdatePasswordForm> = ({
    newPassword,
  }) => {
    mutate(newPassword);
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmitValid)}
    >
      <div>
        <Input
          className="mb-2"
          label="새 비밀번호"
          placeholder="새 비밀번호를 입력해 주세요."
          type="password"
          {...newPasswordRegister}
        />
        <span className="text-sm  text-destructive">
          {errors.newPassword?.message}
        </span>
      </div>

      <div>
        <Input
          className="mb-2"
          label="새 비밀번호 확인"
          placeholder="새 비밀번호를 한 번 더 입력해 주세요."
          type="password"
          {...newPasswordConfirmRegister}
        />
        <span className="text-sm  text-destructive">
          {errors.newPasswordConfirm?.message}
        </span>
      </div>

      <Button className="mt-2" type="submit">
        변경하기
      </Button>
    </form>
  );
}

export default Page;

'use client';

import Spinner from '@app/_components/Spinner';
import { NEW_PATH } from '@app/_constants/urls';
import useFindIdMutation from '@app/_hooks/apis/user/useFindIdMutation';
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@app/_shadcn/components/ui/alert';
import { Button, buttonVariants } from '@app/_shadcn/components/ui/button';
import { Input } from '@app/_shadcn/components/ui/input';
import { cn } from '@app/_shadcn/lib/utils';
import { Terminal } from 'lucide-react';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';

function Page() {
  const { mutate, isPending } = useFindIdMutation();
  const { register, handleSubmit } = useForm<{ email: string }>();

  const onSubmitValid: SubmitHandler<{
    email: string;
  }> = ({ email }) => {
    mutate(email);
  };

  return (
    <section className="small-center absolute-center flex flex-col gap-4">
      <Alert>
        <Terminal className="size-4" />
        <AlertTitle>ID 찾기</AlertTitle>
        <AlertDescription>
          이메일로 가입하신 ID를 전송해드릴게요.
        </AlertDescription>
      </Alert>
      <form
        onSubmit={handleSubmit(onSubmitValid)}
        className="  flex flex-col gap-4"
      >
        <Input
          type="email"
          label="이메일"
          placeholder="가입한 이메일을 입력해주세요."
          {...register('email', { required: true })}
        />

        <Button type="submit" disabled={isPending}>
          {isPending && <Spinner className="mr-2" />}
          ID 찾기{' '}
        </Button>
        <div className="flex justify-between gap-2">
          <Link
            className={cn(buttonVariants({ variant: 'secondary' }), 'w-full')}
            href={NEW_PATH.passwordFind.url}
          >
            비밀번호 찾으러가기
          </Link>
          <Link
            className={cn(buttonVariants({ variant: 'secondary' }), 'w-full')}
            href={NEW_PATH.login.url}
          >
            로그인 하러가기
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Page;

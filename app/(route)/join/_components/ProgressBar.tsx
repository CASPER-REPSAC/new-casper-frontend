import { DownArrowIcon } from '@app/_components/icons';
import { ICON_SIZE } from '@app/_constants/size';
import { PATH } from '@app/_constants/urls';
import { useFunnel } from '@app/_hooks';
import { Button } from '@app/_shadcn/components/ui/button';
import { JoinFormData } from '@app/_types/joinTypes';
import { Check } from 'lucide-react';
import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import { useFormContext } from 'react-hook-form';

function ProgressBar() {
  const { funnelStep } = useFunnel();
  const {
    getValues,
    formState: { dirtyFields, errors },
  } = useFormContext<JoinFormData>();

  const agreeComplete = getValues('agree');
  const emailComplete = !errors.email && !!dirtyFields.email;
  const idComplete = !errors.id && !!dirtyFields.id;
  const nicknameComplete = !errors.nickname && !!dirtyFields.nickname;
  const passwordComplete = !errors.pw && !!dirtyFields.pw;

  return (
    <div className="flex w-full justify-around">
      <Status
        href={{
          pathname: PATH.user.join.url,
          query: { 'funnel-step': 'agree' },
        }}
        active={funnelStep === 'agree'}
        label="개인 정보 수집 동의"
        isComplete={agreeComplete}
      />
      <Status
        href={{
          pathname: PATH.user.join.url,
          query: { 'funnel-step': 'email' },
        }}
        active={funnelStep === 'email'}
        label="이메일 인증"
        isComplete={emailComplete}
      />
      <Status
        href={{
          pathname: PATH.user.join.url,
          query: { 'funnel-step': 'name' },
        }}
        active={funnelStep === 'name'}
        label="닉네임 설정"
        isComplete={nicknameComplete}
      />
      <Status
        href={{
          pathname: PATH.user.join.url,
          query: { 'funnel-step': 'id' },
        }}
        active={funnelStep === 'id'}
        label="아이디 설정"
        isComplete={idComplete}
      />
      <Status
        href={{
          pathname: PATH.user.join.url,
          query: { 'funnel-step': 'password' },
        }}
        active={funnelStep === 'password'}
        label="패스워드 설정"
        isComplete={passwordComplete}
      />
    </div>
  );
}

interface Props {
  isComplete: boolean;
  label: string;
  active?: boolean;
  href: Url;
}

function Status({ href, label, isComplete, active = false }: Props) {
  return (
    <div className="relative flex w-7 flex-col items-center">
      {active && (
        <DownArrowIcon
          size={ICON_SIZE.small}
          className="absolute -top-6 animate-bounce fill-primary"
        />
      )}
      <Button
        variant="outline"
        asChild
        size="icon"
        className={`rounded-full ${isComplete && 'border-primary'}`}
      >
        <Link href={href}>
          <Check
            size={15}
            className={`${isComplete ? 'text-primary' : 'text-slate-300'}`}
          />
        </Link>
      </Button>

      <div
        className={`
        ${isComplete ? 'text-primary' : 'text-slate-300'}
        absolute -bottom-6 w-max text-center text-xs`}
      >
        {label}
      </div>
    </div>
  );
}

export default ProgressBar;

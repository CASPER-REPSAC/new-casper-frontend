import { CheckIcon, DownArrowIcon } from '@app/_components/icons';
import { ICON_SIZE } from '@app/_constants/size';
import { PATH } from '@app/_constants/urls';
import { useFunnel } from '@app/_hooks';
import { JoinFormData } from '@app/_types/joinTypes';
import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import { useFormContext } from 'react-hook-form';

function ProgressBar() {
  const { funnelStep } = useFunnel();
  const {
    formState: { dirtyFields, errors },
  } = useFormContext<JoinFormData>();

  const agreeComplete = !errors.agree && !!dirtyFields.agree;
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
          className="absolute -top-6 animate-bounce fill-indigo-600 dark:fill-sky-400"
        />
      )}
      <Link href={href}>
        <CheckIcon
          size={ICON_SIZE.medium}
          className={`${
            isComplete
              ? 'fill-indigo-600 dark:fill-sky-400'
              : 'fill-slate-300 dark:fill-slate-600'
          }`}
        />
      </Link>
      <div
        className={`
        ${
          isComplete
            ? 'text-indigo-600 dark:text-sky-400'
            : 'text-slate-300 dark:text-slate-600'
        }
        absolute -bottom-6 w-max text-center text-xs`}
      >
        {label}
      </div>
    </div>
  );
}

export default ProgressBar;

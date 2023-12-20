import { CheckIcon, DownArrowIcon } from 'app/_components/icons';
import { ICON_SIZE } from 'app/_constants/size';
import { useFunnel } from 'app/_hooks';
import { JoinFormData } from 'app/_types/joinTypes';
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
    <div className="flex justify-between">
      <Status
        active={funnelStep === 'agree'}
        label="개인 정보 수집 동의"
        isComplete={agreeComplete}
      />
      <Status
        active={funnelStep === 'email'}
        label="이메일 인증"
        isComplete={emailComplete}
      />
      <Status
        active={funnelStep === 'name'}
        label="닉네임 설정"
        isComplete={nicknameComplete}
      />
      <Status
        active={funnelStep === 'id'}
        label="아이디 설정"
        isComplete={idComplete}
      />
      <Status
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
}

function Status({ label, isComplete, active = false }: Props) {
  return (
    <div className="flex w-7 flex-col items-center ">
      {active && (
        <DownArrowIcon
          size={ICON_SIZE.small}
          className="absolute -top-6 animate-bounce fill-indigo-400 dark:fill-sky-400"
        />
      )}
      <CheckIcon
        size={ICON_SIZE.medium}
        className={`${
          isComplete
            ? 'fill-indigo-400 dark:fill-sky-400'
            : 'fill-slate-300 dark:fill-slate-600'
        }`}
      />
      <span className="w-14 text-xs">{label}</span>
    </div>
  );
}

export default ProgressBar;

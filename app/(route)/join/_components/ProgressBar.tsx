import { Check } from 'lucide-react';
import useFunnel from '@app/_hooks/useFunnel';
import useFunnelValid from '@app/_hooks/useJoinFormValid';
import { DownArrowIcon } from '@app/_components/icons';
import { ICON_SIZE } from '@app/_constants/size';
import { Button } from '@app/_shadcn/components/ui/button';

function ProgressBar() {
  const { funnelStep, setFunnelStep } = useFunnel();
  const agreeFunnelValid = useFunnelValid('agree');
  const emailFunnelValid = useFunnelValid('email');
  const idFunnelValid = useFunnelValid('id');
  const nameFunnelValid = useFunnelValid('name');
  const passwordFunnelValid = useFunnelValid('password');

  return (
    <div className="flex w-full justify-around">
      <Status
        onClick={() => setFunnelStep('agree')}
        active={funnelStep === 'agree'}
        label="개인 정보 수집 동의"
        isComplete={agreeFunnelValid}
      />
      <Status
        onClick={() => setFunnelStep('email')}
        active={funnelStep === 'email'}
        label="이메일 인증"
        isComplete={emailFunnelValid}
      />
      <Status
        onClick={() => setFunnelStep('name')}
        active={funnelStep === 'name'}
        label="닉네임 설정"
        isComplete={nameFunnelValid}
      />
      <Status
        onClick={() => setFunnelStep('id')}
        active={funnelStep === 'id'}
        label="아이디 설정"
        isComplete={idFunnelValid}
      />
      <Status
        onClick={() => setFunnelStep('password')}
        active={funnelStep === 'password'}
        label="패스워드 설정"
        isComplete={passwordFunnelValid}
      />
    </div>
  );
}

interface Props {
  isComplete: boolean;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

function Status({ onClick, label, isComplete, active = false }: Props) {
  return (
    <div className="relative flex w-7 flex-col items-center">
      {active && (
        <DownArrowIcon
          size={ICON_SIZE.small}
          className="absolute -top-6 animate-bounce fill-primary"
        />
      )}
      <Button
        type="button"
        variant="outline"
        onClick={onClick}
        size="icon"
        className={`rounded-full ${isComplete && 'border-primary'}`}
      >
        <Check
          size={15}
          className={`${isComplete ? 'text-primary' : 'text-slate-300'}`}
        />
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

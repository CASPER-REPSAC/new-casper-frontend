import { useFormContext } from 'react-hook-form';
import { useJoinMutation } from '@app/_hooks/apis/user';
import useFunnel from '@app/_hooks/useFunnel';
import useFunnelValid from '@app/_hooks/useJoinFormValid';
import { POPUP_DURATION } from '@app/_constants/duration';
import { POPUP_MESSAGE, TOAST_TITLE } from '@app/_constants/message';
import { JoinFormData } from '@app/_types/joinTypes';
import { Button } from '@app/_shadcn/components/ui/button';
import { useToast } from '@app/_shadcn/components/ui/use-toast';

function NextButton() {
  const { funnelStep, setFunnelStep, nextStep } = useFunnel();
  const { toast } = useToast();
  const { mutate } = useJoinMutation();
  const { getValues, handleSubmit } = useFormContext<JoinFormData>();
  const valid = useFunnelValid(funnelStep);

  const onFinish = () => {
    const { id, pw, name, email, nickname, emailKey } = getValues();
    mutate({ id, pw, name, email, nickname, emailKey });
  };

  const onNext = () => {
    setFunnelStep(nextStep);
  };

  const onValid = nextStep === 'finish' ? onFinish : onNext;
  const onInvalid = () => {
    toast({
      variant: 'destructive',
      title: TOAST_TITLE.error,
      description: POPUP_MESSAGE.checkJoinParams,
      duration: POPUP_DURATION.medium,
    });
  };

  return (
    <Button
      size="lg"
      type="submit"
      className="w-full"
      disabled={!valid}
      onClick={handleSubmit(onValid, onInvalid)}
    >
      다음 단계
    </Button>
  );
}

export default NextButton;

import { POPUP_DURATION } from '@app/_constants/duration';
import { POPUP_MESSAGE, TOAST_TITLE } from '@app/_constants/message';
import { useFunnel } from '@app/_hooks';
import { useJoinMutation } from '@app/_hooks/apis/user';
import { Button } from '@app/_shadcn/components/ui/button';
import { useToast } from '@app/_shadcn/components/ui/use-toast';
import { JoinFormData } from '@app/_types/joinTypes';
import { useFormContext } from 'react-hook-form';

function NextButton() {
  const { toast } = useToast();
  const { funnelStep, setFunnelStep, nextStep } = useFunnel();
  const { mutate } = useJoinMutation();
  const {
    getValues,
    formState: { errors, dirtyFields },
    handleSubmit,
  } = useFormContext<JoinFormData>();

  const onFinish = () => {
    const { id, pw, name, email, nickname } = getValues();
    mutate({ id, pw, name, email, nickname });
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

  const checkValid = () => {
    if (funnelStep === 'agree') {
      return getValues('agree');
    }
    if (funnelStep === 'email') {
      return !errors.email && dirtyFields.email;
    }
    if (funnelStep === 'name') {
      return (
        !errors.name &&
        !errors.nickname &&
        dirtyFields.name &&
        dirtyFields.nickname
      );
    }
    if (funnelStep === 'id') {
      return !errors.id && dirtyFields.id;
    }
    if (funnelStep === 'password') {
      return (
        !errors.pw &&
        !errors.pwConfirm &&
        dirtyFields.pw &&
        dirtyFields.pwConfirm
      );
    }

    return false;
  };

  return (
    <Button
      size="lg"
      type="submit"
      className="w-full"
      disabled={!checkValid()}
      onClick={handleSubmit(onValid, onInvalid)}
    >
      다음 단계
    </Button>
  );
}

export default NextButton;

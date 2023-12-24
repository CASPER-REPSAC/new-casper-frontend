import { DefaultButton } from 'app/_components/common';
import { POPUP_DURATION } from 'app/_constants/duration';
import { POPUP_MESSAGE } from 'app/_constants/message';
import { useFunnel, usePopup } from 'app/_hooks';
import { useJoinMutation } from 'app/_hooks/apis/user';
import { JoinFormData } from 'app/_types/joinTypes';
import { useFormContext } from 'react-hook-form';

function NextButton() {
  const { openAndDeletePopup } = usePopup();
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
    openAndDeletePopup({
      message: POPUP_MESSAGE.checkJoinParams,
      duration: POPUP_DURATION.medium,
    });
  };

  const checkValid = () => {
    if (funnelStep === 'agree') {
      return !errors.agree && dirtyFields.agree;
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
    <DefaultButton
      theme="primary"
      type="submit"
      className="w-full"
      disabled={!checkValid()}
      onClick={handleSubmit(onValid, onInvalid)}
    >
      다음 단계
    </DefaultButton>
  );
}

export default NextButton;

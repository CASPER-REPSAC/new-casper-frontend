'use client';

import { DefaultButton } from 'app/_components/common';
import { useFunnel } from 'app/_hooks';
import { useJoinMutation } from 'app/_hooks/apis/user';
import { JoinFormData } from 'app/_types/joinTypes';
import { useFormContext } from 'react-hook-form';

function NextButton() {
  const { mutate } = useJoinMutation();
  const { setFunnelStep, nextStep, funnelStep } = useFunnel();
  const {
    getValues,
    formState: { errors, dirtyFields },
    handleSubmit,
  } = useFormContext<JoinFormData>();

  const onFinish = () => {
    const { id, pw, name, email, nickname } = getValues();
    mutate({ id, pw, name, email, nickname });
    console.log('onFish', id, pw, name, email, nickname);
  };

  const onNext = () => {
    setFunnelStep(nextStep);
  };

  const onClick =
    nextStep === 'finish' ? handleSubmit(onFinish) : handleSubmit(onNext);

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
      disabled={!checkValid()}
      onClick={onClick}
    >
      다음 단계
    </DefaultButton>
  );
}

export default NextButton;

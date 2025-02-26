import { useAtom } from 'jotai';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import { funnelState } from '@app/_store/joinAtoms';
import { isFunnelType } from '@app/_utils/typeGuard';
import { PATH } from '@app/_constants/urls';
import { FunnelStepType } from '@app/_types/joinTypes';

function useFunnel() {
  const QUERY_KEY = 'funnel-step';
  const STEPS: FunnelStepType[] = [
    'agree',
    'email',
    'name',
    'id',
    'password',
    'finish',
  ];

  const { replace } = useRouter();
  const query = useSearchParams();
  const [funnelStep, setStep] = useAtom<FunnelStepType>(funnelState);
  const curStepIndex = STEPS.findIndex((step) => step === funnelStep);
  const nextStep = STEPS[curStepIndex + 1];

  const setFunnelStep = (step: FunnelStepType) => {
    setStep(step);
  };

  const synchronizeFunnelStepAndUrl = useCallback(() => {
    const funnelStepQuery = query?.get(QUERY_KEY);
    if (funnelStepQuery === null || !isFunnelType(funnelStepQuery)) {
      replace(`${PATH.user.join.url}?${QUERY_KEY}=agree`);
      return;
    }
    setStep(funnelStepQuery);
  }, [query, setStep, replace]);

  useEffect(synchronizeFunnelStepAndUrl, [synchronizeFunnelStepAndUrl]);

  return { funnelStep, setFunnelStep, nextStep };
}

export default useFunnel;

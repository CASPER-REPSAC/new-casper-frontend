import { PATH } from 'app/_constants/urls';
import { FunnelStepType } from 'app/_types/joinTypes';
import { isFunnelType } from 'app/_utils/typeGuard';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

function useFunnel(initialStep: FunnelStepType) {
  const QUERY_KEY = 'funnel-step';
  const { push } = useRouter();
  const query = useSearchParams();
  const [funnelStep, setStep] = useState(initialStep);

  const controllFunnelStep = useCallback(() => {
    const funnelStepQuery = query?.get(QUERY_KEY);
    if (funnelStepQuery === null || !isFunnelType(funnelStepQuery)) {
      setStep(initialStep);
      return;
    }
    setStep(funnelStepQuery);
  }, [query, initialStep]);

  const setFunnelStep = (step: FunnelStepType) => {
    const nextUrl = `${PATH.user.join.url}?${QUERY_KEY}=${step}`;
    setStep(step);
    push(nextUrl);
  };

  useEffect(controllFunnelStep, [controllFunnelStep]);

  return { funnelStep, setFunnelStep };
}

export default useFunnel;

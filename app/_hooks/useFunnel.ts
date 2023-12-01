import { PATH } from 'app/_constants/urls';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

function useFunnel<T extends string>(initialStep: T) {
  const QUERY_KEY = 'funnel-step';
  const { push } = useRouter();
  const query = useSearchParams();
  const [funnelStep, setStep] = useState(initialStep);

  const controllFunnelStep = useCallback(() => {
    const funnelStepQuery: T = query?.get(QUERY_KEY) as T;
    if (!funnelStepQuery || typeof funnelStepQuery === 'object') {
      setStep(initialStep);
      return;
    }

    setStep(funnelStepQuery);
  }, [query, initialStep]);

  const setFunnelStep = (step: T) => {
    const nextUrl = PATH.user.join.url;
    const stepQuery = { [QUERY_KEY]: step };
    setStep(step);
    push(nextUrl, { query: stepQuery });
  };

  useEffect(controllFunnelStep, [controllFunnelStep]);

  return { funnelStep, setFunnelStep };
}

export default useFunnel;

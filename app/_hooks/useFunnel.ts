import { PATH } from 'app/_constants/urls';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

function useFunnel<T extends string>(initialStep: T) {
  const QUERY_KEY = 'funnel-step';
  const { query, push } = useRouter();
  const [funnelStep, setStep] = useState(initialStep);

  const controllFunnelStep = useCallback(() => {
    const funnelStepQuery: T = query[QUERY_KEY] as T;

    if (!funnelStepQuery || typeof funnelStepQuery === 'object') {
      setStep(initialStep);
      return;
    }

    setStep(funnelStepQuery);
  }, [query, initialStep]);

  const setFunnelStep = (step: T) => {
    const nextUrl = {
      pathname: PATH.user.join.url,
      query: { [QUERY_KEY]: step },
    };
    setStep(step);
    push(nextUrl);
  };

  useEffect(controllFunnelStep, [controllFunnelStep]);

  return { funnelStep, setFunnelStep };
}

export default useFunnel;

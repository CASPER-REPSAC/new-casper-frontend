import { PATH } from '@src/constants/urls';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

function useFunnel<T extends string>(initialStep: T) {
  const QUERY_KEY = 'funnel-step';
  const { query, push } = useRouter();
  const [funnelStep, setFunnelStep] = useState(initialStep);

  const controllFunnelStep = useCallback(() => {
    const funnelStepQuery: T = query[QUERY_KEY] as T;

    if (!funnelStepQuery || typeof funnelStepQuery === 'object') {
      setFunnelStep(initialStep);
      return;
    }

    setFunnelStep(funnelStepQuery);
  }, [query, initialStep]);

  const controllRoute = useCallback(() => {
    push({
      pathname: PATH.user.join.url,
      query: { [QUERY_KEY]: funnelStep },
    });
  }, [funnelStep, push]);

  useEffect(controllFunnelStep, [controllFunnelStep]);
  useEffect(controllRoute, [controllRoute]);

  return { funnelStep, setFunnelStep };
}

export default useFunnel;

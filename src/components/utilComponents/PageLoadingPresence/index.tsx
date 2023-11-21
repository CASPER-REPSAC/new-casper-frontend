import useLoadingProgressBar from '@src/hooks/useLoadingProgressBar';
import { Router } from 'next/router';
import { ReactNode, useEffect } from 'react';

interface Props {
  children: ReactNode;
}

function PageLoadingPresence({ children }: Props) {
  const { done, start } = useLoadingProgressBar();

  useEffect(() => {
    const handleStart = () => {
      start();
    };
    const handleComplete = () => {
      done();
    };

    Router.events.on('routeChangeStart', handleStart);
    Router.events.on('routeChangeComplete', handleComplete);
    Router.events.on('routeChangeError', handleComplete);

    return () => {
      Router.events.off('routeChangeStart', handleStart);
      Router.events.off('routeChangeComplete', handleComplete);
      Router.events.off('routeChangeError', handleComplete);
    };
  }, [done, start]);

  return <>{children}</>;
}

export default PageLoadingPresence;

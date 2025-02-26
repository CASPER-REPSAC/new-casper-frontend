'use client';

import { useEffect } from 'react';
import useCasperLoginMutation from '@app/_hooks/apis/user/useCasperLoginMutation';
import Spinner from '@app/_components/Spinner';

interface Props {
  searchParams: { code: string };
}

let isInit = false;

function GoogleLoginLoadingPage({ searchParams: { code } }: Props) {
  const { mutate } = useCasperLoginMutation();

  useEffect(() => {
    if (!code) throw new Error('code not found');
    if (isInit) return;
    mutate({
      code,
      redirectUri: process.env.NEXT_PUBLIC_CASPER_REDIRECT_URI,
    });
    isInit = true;
  }, [code, mutate]);

  return (
    <div className="flex-center fixed top-0 z-[9999] h-screen w-screen bg-black/40">
      <Spinner className="size-12" />
    </div>
  );
}

export default GoogleLoginLoadingPage;

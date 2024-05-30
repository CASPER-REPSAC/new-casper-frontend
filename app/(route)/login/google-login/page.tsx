'use client';

import { useSearchParams } from 'next/navigation';
import useGoogleLoginMutation from '@app/_hooks/apis/user/useGoogleLoginMutation';
import { useEffect } from 'react';
import Spinner from '@app/_components/Spinner';

function GoogleLoginLoadingPage() {
  const { mutate } = useGoogleLoginMutation();
  const a = useSearchParams();
  const code = a.get('code');

  useEffect(() => {
    if (!code) return;
    if (typeof window === 'undefined') return;
    mutate({
      code,
      redirectUri: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI,
    });
  }, [code, mutate]);

  return (
    <div className="flex-center fixed top-0 z-[9999] h-screen w-screen bg-black/40">
      <Spinner className="size-12" />
    </div>
  );
}

export default GoogleLoginLoadingPage;

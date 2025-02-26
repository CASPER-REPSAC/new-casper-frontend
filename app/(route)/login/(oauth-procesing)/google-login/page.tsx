'use client';

import { useEffect, use } from 'react';
import useGoogleLoginMutation from '@app/_hooks/apis/user/useGoogleLoginMutation';
import Spinner from '@app/_components/Spinner';

interface Props {
  searchParams: Promise<{ code: string }>;
}

function GoogleLoginLoadingPage(props: Props) {
  const searchParams = use(props.searchParams);

  const {
    code
  } = searchParams;

  const { mutate } = useGoogleLoginMutation();

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

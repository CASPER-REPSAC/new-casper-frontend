'use client';

import { useEffect, use } from 'react';
import useGithubLoginMutation from '@app/_hooks/apis/user/useGithubLoginMutation';
import Spinner from '@app/_components/Spinner';

interface Props {
  searchParams: Promise<{ code?: string; error?: string; error_description?: string }>;
}

function GithubLoginLoadingPage(props: Props) {
  const searchParams = use(props.searchParams);

  const {
    code,
    error,
    error_description
  } = searchParams;

  const { mutate } = useGithubLoginMutation();

  useEffect(() => {
    if (error) throw new Error(error_description);
    if (!code) throw new Error('code not found');
    if (typeof window === 'undefined') return;
    mutate({
      code,
      redirectUri: process.env.NEXT_PUBLIC_GITHUB_REDIRECT_URI,
    });
  }, [code, mutate, error, error_description]);

  return (
    <div className="flex-center fixed top-0 z-[9999] h-screen w-screen bg-black/40">
      <Spinner className="size-12" />
    </div>
  );
}

export default GithubLoginLoadingPage;

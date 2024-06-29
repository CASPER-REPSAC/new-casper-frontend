'use client';

import { GithubIcon } from '@app/_components/icons';
import { GITHUB_OAUTH } from '@app/_constants/apiUrl';
import { Button } from '@app/_shadcn/components/ui/button';

function GithubLoginButton() {
  const queryObject = {
    client_id: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
    redirect_uri: process.env.NEXT_PUBLIC_GITHUB_REDIRECT_URI,
  };
  const query = new URLSearchParams(queryObject);

  const redirectToOauth = () => {
    window.location.assign(`${GITHUB_OAUTH}?${query}`);
  };

  return (
    <Button
      size="lg"
      variant="outline"
      className="flex gap-4"
      onClick={redirectToOauth}
    >
      <GithubIcon size={24} />
      <span className="text-base">깃허브 계정으로 계속하기</span>
    </Button>
  );
}

export default GithubLoginButton;

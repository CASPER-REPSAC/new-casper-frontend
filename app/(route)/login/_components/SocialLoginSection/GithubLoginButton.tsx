'use client';

import LastLoginBadge from '@app/_components/common/LastLoginBadge';
import { GithubIcon } from '@app/_components/icons';
import { GITHUB_OAUTH } from '@app/_constants/apiUrl';
import useSnsLastLogin from '@app/_hooks/useSnsLastLogin';
import { Button } from '@app/_shadcn/components/ui/button';

function GithubLoginButton() {
  const { lastLogin } = useSnsLastLogin();
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
      {lastLogin === 'github' && <LastLoginBadge />}
    </Button>
  );
}

export default GithubLoginButton;

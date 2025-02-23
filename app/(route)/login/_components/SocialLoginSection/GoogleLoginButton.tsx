'use client';

import { GoogleIcon } from '@app/_components/icons';
import { GOOGLE_OAUTH } from '@app/_constants/apiUrl';
import { Button } from '@app/_shadcn/components/ui/button';

function GoogleLoginButton() {
  const queryObject = {
    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI,
    response_type: 'code',
    scope:
      'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
  };
  const query = new URLSearchParams(queryObject);

  const redirectToOauth = () => {
    window.location.assign(`${GOOGLE_OAUTH}?${query}`);
  };

  return (
    <Button
      size="lg"
      variant="outline"
      className="flex gap-4"
      onClick={redirectToOauth}
    >
      <GoogleIcon size={24} />
      <span className="text-base">구글 계정으로 계속하기</span>
    </Button>
  );
}

export default GoogleLoginButton;

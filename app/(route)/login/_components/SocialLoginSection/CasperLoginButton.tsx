'use client';

import CasperPLog from '@app/_components/common/CasperPLog';
import { CASPER_OAUTH } from '@app/_constants/apiUrl';
import { Button } from '@app/_shadcn/components/ui/button';

function CasperLoginButton() {
  const queryObject = {
    redirect_uri: process.env.NEXT_PUBLIC_CASPER_REDIRECT_URI,
    client_id: 'sQI42oqkBP8h25YUGdE9laQHyqH2QdSt54TsQWCk',
    response_type: 'code',
    scope: 'email openid profile offline_access',
  };
  const query = new URLSearchParams(queryObject);

  const redirectToOauth = () => {
    window.location.assign(`${CASPER_OAUTH}?${query}`);
  };

  return (
    <Button
      size="lg"
      variant="outline"
      className="flex gap-4"
      onClick={redirectToOauth}
    >
      <CasperPLog variant="black" size={24} />
      <span className="text-base">Casper SSO로 계속하기</span>
    </Button>
  );
}

export default CasperLoginButton;

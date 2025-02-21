'use client';

import CasperPLog from '@app/_components/common/CasperPLog';
import LastLoginBadge from '@app/_components/common/LastLoginBadge';
import { CASPER_OAUTH } from '@app/_constants/apiUrl';
import useSnsLastLogin from '@app/_hooks/useSnsLastLogin';
import { Button } from '@app/_shadcn/components/ui/button';

function CasperLoginButton() {
  const { lastLogin } = useSnsLastLogin();
  const queryObject = {
    redirect_uri: 'https://www.casper.or.kr/login/sso-login',
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
      {lastLogin === 'github' && <LastLoginBadge />}
    </Button>
  );
}

export default CasperLoginButton;

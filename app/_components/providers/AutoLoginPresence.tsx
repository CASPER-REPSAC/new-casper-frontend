'use client';

import useAutoLoginMutation from '@app/_hooks/apis/user/useAutoLoginMutation';
import { accessTokenState } from '@app/_store/permissionAtoms';
import { parseJwt } from '@app/_utils/jwt';
import { useCallback, useEffect } from 'react';
import { useRecoilValue } from 'recoil';

function AutoLoginPresence() {
  const { mutate: clientLoginMutate } = useAutoLoginMutation();
  const accessToken = useRecoilValue(accessTokenState);

  const registerLogin = useCallback(() => {
    if (!accessToken) return () => {};

    const { exp: expireDate } = parseJwt(accessToken);
    const expireDateMs = expireDate * 1000;
    const now = new Date().getTime();
    const refreshTime = expireDateMs - now - 60 * 1000;

    const slientRefresh = setTimeout(() => {
      clientLoginMutate();
    }, refreshTime);

    return () => clearTimeout(slientRefresh);
  }, [accessToken, clientLoginMutate]);

  useEffect(clientLoginMutate, [clientLoginMutate]);
  useEffect(registerLogin, [registerLogin]);

  return <></>;
}

export default AutoLoginPresence;

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

    const { exp } = parseJwt(accessToken);
    const now = new Date().getMilliseconds();
    const refreshTime = exp - now - 6000;

    const slientRefresh = setTimeout(() => {
      clientLoginMutate();
      registerLogin();
    }, refreshTime);

    return () => clearTimeout(slientRefresh);
  }, [accessToken, clientLoginMutate]);

  useEffect(clientLoginMutate, [clientLoginMutate]);
  useEffect(registerLogin, [registerLogin]);

  return <></>;
}

export default AutoLoginPresence;

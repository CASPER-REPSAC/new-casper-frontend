'use client';

import useAutoLoginMutation from '@app/_hooks/apis/user/useAutoLoginMutation';
import { accessTokenState } from '@app/_store/permissionAtoms';
import { parseJwt } from '@app/_utils/jwt';
import { memo, useCallback, useEffect } from 'react';
import { useRecoilValue } from 'recoil';

function ExtendLogin() {
  const { mutate: autoLoginMutate } = useAutoLoginMutation();
  const accessToken = useRecoilValue(accessTokenState);

  const registerLogin = useCallback(() => {
    if (!accessToken) return () => {};

    const { exp: expireDate } = parseJwt(accessToken);
    const expireDateMs = expireDate * 1000;
    const now = new Date().getTime();
    const refreshTime = expireDateMs - now - 60 * 1000;

    const slientRefresh = setTimeout(() => {
      autoLoginMutate();
    }, refreshTime);

    return () => clearTimeout(slientRefresh);
  }, [accessToken, autoLoginMutate]);

  // eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(registerLogin, [registerLogin]);

  return <></>;
}

export default memo(ExtendLogin);

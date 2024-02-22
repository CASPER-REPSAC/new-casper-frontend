'use client';

import useAutoLoginMutation from '@app/_hooks/apis/user/useAutoLoginMutation';
import { accessTokenState } from '@app/_store/permissionAtoms';
import { parseJwt } from '@app/_utils/jwt';
import { ReactNode, useCallback, useEffect } from 'react';
import { useRecoilValue } from 'recoil';

interface Props {
  children: ReactNode;
}

function AutoLoginPresence({ children }: Props) {
  const { mutate: clientLoginMutate } = useAutoLoginMutation();
  const accessToken = useRecoilValue(accessTokenState);

  useEffect(() => {
    clientLoginMutate();
  }, [clientLoginMutate]);

  const slientRefresh = useCallback(() => {
    if (!accessToken) return () => {};

    const { exp: expireDate } = parseJwt(accessToken);
    const expireDateMs = expireDate * 1000;
    const now = new Date().getTime();
    const refreshTime = expireDateMs - now - 60 * 1000;

    const refreshTimer = setTimeout(clientLoginMutate, refreshTime);
    return () => clearTimeout(refreshTimer);
  }, [accessToken, clientLoginMutate]);

  useEffect(slientRefresh, [slientRefresh]);

  return <>{children}</>;
}

export default AutoLoginPresence;

'use client';

import useAutoLoginMutation from 'app/_hooks/apis/user/useAutoLoginMutation';
import useServerSideLoginMutation from 'app/_hooks/apis/user/useServerSideLoginMutation';
import { accessTokenState } from 'app/_store/permissionAtoms';
import { parseJwt } from 'app/_utils/jwt';
import { ReactNode, useCallback, useEffect } from 'react';
import { useRecoilValue } from 'recoil';

interface Props {
  children: ReactNode;
}

function AutoLoginPresence({ children }: Props) {
  const { mutate: clientLoginMutate } = useAutoLoginMutation();
  const { mutate: serverLoginMutate } = useServerSideLoginMutation();
  const accessToken = useRecoilValue(accessTokenState);

  useEffect(() => {
    clientLoginMutate();
  }, [clientLoginMutate]);

  useEffect(() => {
    if (!accessToken) return;
    serverLoginMutate(accessToken);
  }, [serverLoginMutate, accessToken]);

  const slientRefresh = useCallback(() => {
    if (!accessToken) return () => {};

    const { exp } = parseJwt(accessToken);
    const now = new Date().getMilliseconds();
    const refreshTime = exp - now - 6000;

    const refreshTimer = setTimeout(clientLoginMutate, refreshTime);
    return () => clearTimeout(refreshTimer);
  }, [accessToken, clientLoginMutate]);

  useEffect(slientRefresh, [slientRefresh]);

  return <>{children}</>;
}

export default AutoLoginPresence;
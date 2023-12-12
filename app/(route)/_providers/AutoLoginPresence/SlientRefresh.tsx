'use client';

import { ERROR_MESSAGE } from 'app/_constants/message';
import { postAutoLogin, setServerSideAccessToken } from 'app/_service/user';
import { accessTokenState } from 'app/_store/permissionAtoms';
import { parseJwt } from 'app/_utils/jwt';
import { ReactNode, useEffect } from 'react';
import { useRecoilState } from 'recoil';

interface Props {
  children: ReactNode;
}

function SlientRefresh({ children }: Props) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    if (!accessToken) return () => {};

    const { exp } = parseJwt(accessToken);
    const now = new Date().getMilliseconds();
    const refreshTime = exp - now - 6000;

    const performAutoLogin = async () => {
      try {
        const { data } = await postAutoLogin(true);
        const newAccessToken = data.accessToken;
        setAccessToken(newAccessToken);
      } catch {
        throw new Error(ERROR_MESSAGE.autoLogin);
      }
    };

    const refreshTimer = setTimeout(performAutoLogin, refreshTime);
    return () => clearTimeout(refreshTimer);
  }, [accessToken, setAccessToken]);

  useEffect(() => {
    if (!accessToken) return;

    const setServerSideToken = async () => {
      try {
        await setServerSideAccessToken(accessToken);
      } catch {
        throw new Error(ERROR_MESSAGE.autoLogin);
      }
    };

    setServerSideToken();
  }, [accessToken]);

  return <>{children}</>;
}

export default SlientRefresh;

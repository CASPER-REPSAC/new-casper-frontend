'use client';

import useAutoLoginMutation from '@app/_hooks/apis/user/useAutoLoginMutation';
import { accessTokenState } from '@app/_store/permissionAtoms';
import { parseJwt } from '@app/_utils/jwt';
import { memo, useEffect } from 'react';
import { useRecoilValue } from 'recoil';

function ExtendLogin() {
  const { mutate: autoLoginMutate } = useAutoLoginMutation();
  const accessToken = useRecoilValue(accessTokenState);

  useEffect(() => {
    if (!accessToken) return () => {};

    const { exp: expireDate } = parseJwt(accessToken);
    const expireDateMs = expireDate * 1000;
    const now = new Date().getTime();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const refreshTime = expireDateMs - now - 60 * 1000;

    const slientRefresh = setTimeout(() => {
      autoLoginMutate();
    }, 60 * 1000);

    return () => clearTimeout(slientRefresh);
  }, [accessToken, autoLoginMutate]);

  return <></>;
}

export default memo(ExtendLogin);

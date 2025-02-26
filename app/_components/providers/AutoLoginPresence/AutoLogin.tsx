'use client';

import { getRefreshToken } from '@app/_actions';
import { memo, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import useAutoLoginMutation from '@app/_hooks/apis/user/useAutoLoginMutation';
import { loginState } from '@app/_store/permissionAtoms';

function AutoLogin() {
  const { mutate: autoLoginMutate } = useAutoLoginMutation();
  const isLoggedIn = useRecoilValue(loginState);

  useEffect(() => {
    if (isLoggedIn) return;
    getRefreshToken().then((refreshToken) => {
      if (refreshToken) autoLoginMutate();
    });
  }, [isLoggedIn, autoLoginMutate]);

  return <></>;
}

export default memo(AutoLogin);

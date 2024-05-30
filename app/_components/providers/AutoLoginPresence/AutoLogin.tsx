'use client';

import { getRefreshToken } from '@app/_actions';
import useAutoLoginMutation from '@app/_hooks/apis/user/useAutoLoginMutation';
import { loginState } from '@app/_store/permissionAtoms';
import { memo, useEffect } from 'react';
import { useRecoilValue } from 'recoil';

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

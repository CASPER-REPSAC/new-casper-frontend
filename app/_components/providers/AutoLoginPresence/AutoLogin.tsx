'use client';

import useAutoLoginMutation from '@app/_hooks/apis/user/useAutoLoginMutation';
import { loginState } from '@app/_store/permissionAtoms';
import { memo, useEffect } from 'react';
import { useRecoilValue } from 'recoil';

function AutoLogin() {
  const { mutate: autoLoginMutate } = useAutoLoginMutation();
  const isLoggedIn = useRecoilValue(loginState);

  useEffect(() => {
    if (!isLoggedIn) {
      autoLoginMutate();
    }
  }, [isLoggedIn, autoLoginMutate]);

  return <></>;
}

export default memo(AutoLogin);

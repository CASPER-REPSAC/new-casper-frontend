'use client';

import useAutoLoginMutation from '@app/_hooks/apis/user/useAutoLoginMutation';
import { useEffect } from 'react';

function AutoLogin() {
  const { mutate: autoLoginMutate } = useAutoLoginMutation();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      autoLoginMutate();
    }
  }, [autoLoginMutate]);

  return <></>;
}

export default AutoLogin;

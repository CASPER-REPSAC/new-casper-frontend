'use client';

import useAutoLoginMutation from '@app/_hooks/apis/user/useAutoLoginMutation';
import { memo, useEffect } from 'react';

function AutoLogin() {
  const { mutate: autoLoginMutate } = useAutoLoginMutation();

  useEffect(() => {
    autoLoginMutate();
  }, [autoLoginMutate]);

  return <></>;
}

export default memo(AutoLogin);

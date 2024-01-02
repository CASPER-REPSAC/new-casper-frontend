'use client';

import revalidate from '@app/_actions/revalidate';
import { accessTokenState } from '@app/_store/permissionAtoms';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

function RevalidateController() {
  const accessToken = useRecoilValue(accessTokenState);

  useEffect(() => {
    revalidate('accessToken');
  }, [accessToken]);

  return <></>;
}

export default RevalidateController;

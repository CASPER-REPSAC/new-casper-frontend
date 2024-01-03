'use client';

// import revalidate from '@app/_actions/revalidate';
import { accessTokenState } from '@app/_store/permissionAtoms';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

function RevalidateController() {
  const accessToken = useRecoilValue(accessTokenState);

  useEffect(() => {
    // 버그 발생.. 일단 보류
    // revalidate('accessToken');
  }, [accessToken]);

  return <></>;
}

export default RevalidateController;

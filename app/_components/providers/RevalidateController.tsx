'use client';

import useRevalidateMutation from 'app/_hooks/apis/useRevalidateMutation';
import { accessTokenState } from 'app/_store/permissionAtoms';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

function RevalidateController() {
  const { mutate } = useRevalidateMutation();
  const accessToken = useRecoilValue(accessTokenState);

  useEffect(() => {
    mutate('accessToken');
  }, [accessToken, mutate]);

  return <></>;
}

export default RevalidateController;

'use client';

import { accessTokenState, myProfileState } from 'app/_store/permissionAtoms';
import { MyProfile } from 'app/_types/userTypes';
import { ReactNode, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

interface Props {
  accessToken: string;
  myProfile: MyProfile;
  children: ReactNode;
}

function AutoLoginClient({ accessToken, myProfile, children }: Props) {
  const setAccessToken = useSetRecoilState(accessTokenState);
  const setMyProfile = useSetRecoilState(myProfileState);

  useEffect(() => {
    setAccessToken(accessToken);
    setMyProfile(myProfile);
  });

  return <>{children}</>;
}

export default AutoLoginClient;

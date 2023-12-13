import axios from 'axios';
import { ReactNode } from 'react';
import { cookies } from 'next/headers';
import { MyProfile } from 'app/_types/userTypes';
import { postAutoLogin } from 'app/_service/user';
import { ERROR_MESSAGE } from 'app/_constants/message';
import AutoLoginClient from './AutoLoginClient';
import SlientRefresh from './SlientRefresh';

async function AutoLoginPresence({ children }: { children: ReactNode }) {
  const cookieStore = cookies();
  const refreshToken = cookieStore.get('refreshToken');

  let accessToken: string | undefined;
  let myProfile: MyProfile | undefined;

  if (refreshToken) {
    axios.defaults.headers.Cookie = `refreshToken=${refreshToken.value};`;
    try {
      const { data } = await postAutoLogin();
      accessToken = data.accessToken;
      myProfile = data.myInfo;
    } catch {
      throw new Error(ERROR_MESSAGE.autoLogin);
    }
  }

  return (
    <AutoLoginClient accessToken={accessToken} myProfile={myProfile}>
      <SlientRefresh>{children}</SlientRefresh>
    </AutoLoginClient>
  );
}

export default AutoLoginPresence;

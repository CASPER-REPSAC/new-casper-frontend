import axios from 'axios';
import { ReactNode } from 'react';
import { cookies } from 'next/headers';
import { postAutoLogin } from 'app/_service/user';
import AutoLoginClient from './AutoLoginClient';

async function AutoLoginPresence({ children }: { children: ReactNode }) {
  const cookieStore = cookies();
  const refreshToken = cookieStore.get('refreshToken');

  try {
    axios.defaults.headers.Cookie = `refreshToken=${refreshToken?.value};`;
    const {
      data: { accessToken, myInfo },
    } = await postAutoLogin();
    axios.defaults.headers.common.Authorization = accessToken;

    return (
      <AutoLoginClient accessToken={accessToken} myProfile={myInfo}>
        {children}
      </AutoLoginClient>
    );
  } catch (e) {
    return <>{children}</>;
  }
}

export default AutoLoginPresence;

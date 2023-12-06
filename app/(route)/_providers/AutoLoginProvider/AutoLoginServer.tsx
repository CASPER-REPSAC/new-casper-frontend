import axios from 'axios';
import { ReactNode } from 'react';
import { cookies } from 'next/headers';
import { API_URL, AUTO_LOGIN_API } from 'app/_constants/apiUrl';
import { AutoLoginResponse } from 'app/_types/loginTypes';
import AutoLoginClient from './AutoLoginClient';

async function AutoLoginServer({ children }: { children: ReactNode }) {
  const cookieStore = cookies();
  const refreshToken = cookieStore.get('refreshToken');

  try {
    axios.defaults.headers.Cookie = `refreshToken=${refreshToken?.value};`;
    const {
      data: { accessToken, myInfo },
    } = await axios.post<AutoLoginResponse>(
      `${API_URL}${AUTO_LOGIN_API}`,
      undefined,
      { withCredentials: true },
    );
    axios.defaults.headers.common.Authorization = accessToken;
    return (
      <>
        <AutoLoginClient accessToken={accessToken} myProfile={myInfo}>
          {children}
        </AutoLoginClient>
      </>
    );
  } catch (e) {
    return <>{children}</>;
  }
}

export default AutoLoginServer;

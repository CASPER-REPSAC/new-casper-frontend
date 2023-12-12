import axios from 'axios';
import { cache } from 'react';
import {
  ALL_MEMEBER_API,
  API_URL,
  AUTO_LOGIN_API,
  LOGIN_API,
  MEMBER_API,
} from 'app/_constants/apiUrl';
import { Profile } from 'app/_types/userTypes';
import { MemberProfile } from 'app/_types/memberTypes';
import {
  AutoLoginResponse,
  LoginRequest,
  LoginResponse,
} from 'app/_types/loginTypes';

export const getProfile = cache(async (id: string, proxy: boolean = false) => {
  const url = proxy
    ? `/proxy${MEMBER_API}?id=${id}`
    : `${API_URL}${MEMBER_API}?id=${id}`;

  const { data } = await axios.get<Profile>(url);
  return data;
});

export const getAllMember = cache(
  async (role: string, fromServer: boolean = false) => {
    const url = fromServer
      ? `${API_URL}${ALL_MEMEBER_API}?role=${role}`
      : `${ALL_MEMEBER_API}?role=${role}`;

    const { data } = await axios.get<{ memberList: MemberProfile[] }>(url);
    return data;
  },
);

export const postAutoLogin = cache(async (proxy: boolean = false) => {
  const url = proxy ? `/proxy${AUTO_LOGIN_API}` : `${API_URL}${AUTO_LOGIN_API}`;

  const data = await axios.post<AutoLoginResponse>(url, undefined, {
    withCredentials: true,
  });

  return data;
});

export const postLogin = cache(async (params: LoginRequest) => {
  const data = await axios.post<LoginResponse>(`/proxy${LOGIN_API}`, params);

  return data;
});

export const setServerSideAccessToken = cache(async (accessToken: string) => {
  const res = await axios.post('/api/setAccessToken', { accessToken });
  return res;
});

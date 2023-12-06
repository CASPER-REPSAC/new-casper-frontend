import axios from 'axios';
import {
  ALL_MEMEBER_API,
  API_URL,
  AUTO_LOGIN_API,
  MEMBER_API,
} from 'app/_constants/apiUrl';
import { Profile } from 'app/_types/userTypes';
import { MemberProfile } from 'app/_types/memberTypes';
import { cache } from 'react';
import { AutoLoginResponse } from 'app/_types/loginTypes';

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

export const postAutoLogin = cache(async () => {
  const data = await axios.post<AutoLoginResponse>(
    `${API_URL}${AUTO_LOGIN_API}`,
    undefined,
    { withCredentials: true },
  );

  return data;
});

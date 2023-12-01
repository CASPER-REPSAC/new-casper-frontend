import axios from 'axios';
import { ALL_MEMEBER_API, API_URL, MEMBER_API } from 'app/_constants/apiUrl';
import { Profile } from 'app/_types/userTypes';
import { MemberProfile } from 'app/_types/memberTypes';
import { cache } from 'react';

export const getProfile = cache(
  async (id: string, fromServer: boolean = false) => {
    const url = fromServer
      ? `${API_URL}${MEMBER_API}?id=${id}`
      : `${MEMBER_API}?id=${id}`;

    const { data } = await axios.get<Profile>(url);
    return data;
  },
);

export const getAllMember = cache(
  async (role: string, fromServer: boolean = false) => {
    const url = fromServer
      ? `${API_URL}${ALL_MEMEBER_API}?role=${role}`
      : `${ALL_MEMEBER_API}?role=${role}`;

    const { data } = await axios.get<{ memberList: MemberProfile[] }>(url);
    return data;
  },
);

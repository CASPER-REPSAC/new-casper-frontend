import axios from 'axios';
import { cache } from 'react';
import { ALL_MEMEBER_API, API_URL } from '@app/_constants/apiUrl';
import { MemberProfile } from '@app/_types/memberTypes';

// eslint-disable-next-line import/prefer-default-export
export const getAllMember = cache(async (role: string) => {
  const url = `${API_URL}${ALL_MEMEBER_API}?role=${role}`;
  const { data } = await axios.get<{ memberList: MemberProfile[] }>(url);
  return data;
});

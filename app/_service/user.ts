import axios from 'axios';
import { API_URL, MEMBER_API } from 'app/_constants/apiUrl';
import { Profile } from 'app/_types/userTypes';

/* eslint-disable import/prefer-default-export */
export async function getProfile(id: string, fromServer: boolean = false) {
  const url = fromServer
    ? `${API_URL}${MEMBER_API}?id=${id}`
    : `${MEMBER_API}?id=${id}`;

  const { data } = await axios.get<Profile>(url);
  console.log(data);
  return data;
}

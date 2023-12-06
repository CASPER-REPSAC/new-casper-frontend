/* eslint-disable import/prefer-default-export */
import { API_URL, LOGINT_API } from 'app/_constants/apiUrl';
import { LoginResponse } from 'app/_types/loginTypes';
import axios from 'axios';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const { id, pw } = await req.json();

  const { data, headers, status } = await axios.post<LoginResponse>(
    `${API_URL}${LOGINT_API}`,
    {
      id,
      pw,
    },
  );

  axios.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`;

  const setCookieValue = headers['set-cookie']?.join('');
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Set-Cookie': setCookieValue || '' },
  });
}

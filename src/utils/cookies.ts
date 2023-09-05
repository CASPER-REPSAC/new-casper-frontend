import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { cookies } from 'next/headers';

export const getCookie = (name: string) => {
  const cookieStore = cookies();
  return cookieStore.get(name);
};

export const setCookie = (
  name: string,
  value: string,
  option?: RequestCookie,
) => {
  cookies().set({
    name,
    value,
    ...option,
  });
};

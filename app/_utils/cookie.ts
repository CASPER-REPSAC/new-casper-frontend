import { cookies } from 'next/headers';

// eslint-disable-next-line import/prefer-default-export
export function getAccessToken() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken');
  return accessToken?.value;
}

export function getBearerToken() {
  const accessToken = getAccessToken();
  return 'Bearer'.concat(accessToken ?? '');
}

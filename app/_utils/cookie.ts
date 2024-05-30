import { cookies } from 'next/headers';

export function getAccessToken() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken');
  return accessToken?.value;
}

export function getBearerToken() {
  const accessToken = getAccessToken();
  return 'Bearer '.concat(accessToken ?? '');
}

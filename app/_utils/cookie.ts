import { cookies, type UnsafeUnwrappedCookies } from 'next/headers';

export function getAccessToken() {
  const cookieStore = (cookies() as unknown as UnsafeUnwrappedCookies);
  const accessToken = cookieStore.get('accessToken');
  return accessToken?.value;
}

export function getBearerToken() {
  const accessToken = getAccessToken();
  return 'Bearer '.concat(accessToken ?? '');
}

import { cookies } from 'next/headers';

export async function getAccessToken() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken');
  return accessToken?.value;
}

export async function getBearerToken() {
  const accessToken = await getAccessToken();
  return 'Bearer '.concat(accessToken ?? '');
}

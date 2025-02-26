'use server';

import {
  revalidatePath as _revalidatePath,
  revalidateTag as _revalidateTag,
} from 'next/cache';
import { cookies } from 'next/headers';
import { redirect as _redirect } from 'next/navigation';

export async function revalidatePath(path: string) {
  _revalidatePath(path);
}

export async function redirect(url: string) {
  _redirect(url);
}

export async function revalidateTag(tag: string) {
  _revalidateTag(tag);
}

export async function getRefreshToken() {
  const refreshToken = (await cookies()).get('refreshToken')?.value;
  return refreshToken;
}

export async function getAccessToken() {
  const accessToken = (await cookies()).get('accessToken')?.value;
  return accessToken;
}

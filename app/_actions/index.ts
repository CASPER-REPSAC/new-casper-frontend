'use server';

import {
  revalidatePath as _revalidatePath,
  revalidateTag as _revalidateTag,
} from 'next/cache';
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

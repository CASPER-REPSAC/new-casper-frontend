'use server';

import { revalidateTag as _revalidateTag } from 'next/cache';

export default async function revalidateTag(tag: string) {
  _revalidateTag(tag);
}

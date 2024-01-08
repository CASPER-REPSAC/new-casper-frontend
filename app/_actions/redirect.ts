'use server';

import { redirect as _redirect } from 'next/navigation';

export default async function redirect(url: string) {
  _redirect(url);
}

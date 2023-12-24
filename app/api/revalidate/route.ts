import { revalidateTag } from 'next/cache';
import { NextRequest } from 'next/server';

// eslint-disable-next-line import/prefer-default-export
export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get('tag');
  if (!tag) {
    return Response.json({ revalidated: false, now: Date.now() });
  }

  revalidateTag(tag);
  return Response.json({ revalidated: true, now: Date.now() });
}

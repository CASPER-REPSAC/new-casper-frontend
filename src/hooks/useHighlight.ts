// 입력 path, 현재 url이 같은 경로인지 true, false

import { useRouter } from 'next/router';

export default function useHighlight(path: string) {
  const { asPath } = useRouter();
  return asPath.startsWith(path);
}

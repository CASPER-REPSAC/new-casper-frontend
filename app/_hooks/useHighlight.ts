// 입력 path, 현재 url이 같은 경로인지 true, false

import { usePathname } from 'next/navigation';

export default function useHighlight(path: string) {
  const pathname = usePathname();

  return pathname?.startsWith(path);
}

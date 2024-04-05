import { NextUIProvider } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function NextUIWrapper({ children }: Props) {
  const router = useRouter();

  return <NextUIProvider navigate={router.push}>{children}</NextUIProvider>;
}

export default NextUIWrapper;

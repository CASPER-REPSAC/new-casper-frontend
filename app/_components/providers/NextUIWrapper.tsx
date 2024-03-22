import { NextUIProvider } from '@nextui-org/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function NextUIWrapper({ children }: Props) {
  return <NextUIProvider>{children}</NextUIProvider>;
}

export default NextUIWrapper;

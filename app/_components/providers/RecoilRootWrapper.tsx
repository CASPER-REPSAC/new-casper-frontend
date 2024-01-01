'use client';

import { MutableSnapshot, RecoilRoot } from 'recoil';
import { ReactNode } from 'react';
import themeState from '@app/_store/themeAtom';

function RecoilRootWrapper({ children }: { children: ReactNode }) {
  const initializeState = ({ set }: MutableSnapshot) => {
    if (typeof window === 'undefined') return;
    const theme = localStorage.getItem('theme');
    const initState = theme === 'dark' ? 'dark' : 'light';
    set(themeState, initState);
  };
  return <RecoilRoot initializeState={initializeState}>{children}</RecoilRoot>;
}

export default RecoilRootWrapper;

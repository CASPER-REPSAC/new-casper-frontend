import { ReactNode, useLayoutEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import themeState from 'app/_store/themeAtom';

interface Props {
  children: ReactNode;
}

function SyncTheme({ children }: Props) {
  const setTheme = useSetRecoilState(themeState);

  useLayoutEffect(() => {
    const theme = localStorage.getItem('theme');

    if (theme === 'dark' || theme === 'light') setTheme(theme);
  }, [setTheme]);

  return <>{children}</>;
}

export default SyncTheme;

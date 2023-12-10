import themeState from 'app/_store/themeAtom';
import { useLayoutEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

function useTheme() {
  const [theme, setTheme] = useState('dark');
  const [recoilTheme, setRecoilTheme] = useRecoilState(themeState);

  useLayoutEffect(() => {
    setTheme(recoilTheme);
  }, [recoilTheme]);

  return { theme, setTheme: setRecoilTheme };
}

export default useTheme;

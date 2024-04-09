import { useLayoutEffect, useState } from 'react';

function useTheme() {
  const localStorageTheme =
    localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';

  const [themeState, setThemeState] = useState<'dark' | 'light'>(
    localStorageTheme,
  );

  useLayoutEffect(() => {
    if (themeState === 'light') {
      document.documentElement.classList.remove('dark');
      return;
    }
    if (themeState === 'dark') {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    }
  }, [themeState]);

  const setTheme = (theme: 'light' | 'dark') => {
    setThemeState(theme);
    localStorage.setItem('theme', theme);
  };

  return { theme: themeState, setTheme };
}

export default useTheme;

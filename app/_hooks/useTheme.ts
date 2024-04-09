import { useEffect, useState } from 'react';

function useTheme() {
  const [themeState, setThemeState] = useState<'dark' | 'light'>('light');

  useEffect(() => {
    if (themeState === 'light') {
      document.documentElement.classList.remove('dark');
      return;
    }
    if (themeState === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, [themeState]);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if ((theme && theme === 'light') || theme === 'dark') {
      setThemeState(theme);
    }
  }, [setThemeState]);

  const setTheme = (theme: 'light' | 'dark') => {
    setThemeState(theme);
    localStorage.setItem('theme', theme);
  };

  return { theme: themeState, setTheme };
}

export default useTheme;

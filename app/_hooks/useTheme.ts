import { useEffect, useState } from 'react';

function useTheme() {
  const savedTheme =
    localStorage.getItem('theme') === 'light' ? 'light' : 'dark';

  const [theme, setTheme] = useState<'dark' | 'light'>(savedTheme);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, setTheme };
}

export default useTheme;

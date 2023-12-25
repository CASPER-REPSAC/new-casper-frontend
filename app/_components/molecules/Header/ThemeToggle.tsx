'use client';

import { MoonIcon, SunIcon } from '@app/_components/icons';
import { useTheme } from '@app/_hooks';

function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();

  const toggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return (
    <button aria-label="theme_button" type="button" onClick={toggle}>
      {theme === 'dark' && <MoonIcon />}
      {theme === 'light' && <SunIcon />}
    </button>
  );
}

export default ThemeToggleButton;

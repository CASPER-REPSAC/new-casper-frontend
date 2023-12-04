'use client';

import { useTheme } from 'app/_hooks';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggle = () => {
    const htmlElement = document.querySelector('html');
    const isDarkMode = htmlElement?.classList.contains('dark');
    if (isDarkMode) {
      htmlElement?.classList.remove('dark');
      setTheme('light');
      return;
    }
    htmlElement?.classList.add('dark');
    setTheme('dark');
  };

  console.log(theme);

  return (
    <button type="button" onClick={toggle}>
      toggle
    </button>
  );
}

export default ThemeToggle;

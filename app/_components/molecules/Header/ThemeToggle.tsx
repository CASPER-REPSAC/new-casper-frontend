'use client';

import themeState from 'app/_store/themeAtom';
import { useSetRecoilState } from 'recoil';

function ThemeToggle() {
  const setTheme = useSetRecoilState(themeState);

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

  return (
    <button type="button" onClick={toggle}>
      toggle
    </button>
  );
}

export default ThemeToggle;

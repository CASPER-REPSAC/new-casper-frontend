'use client';

import themeState from 'app/_store/themeAtom';
import { useSetRecoilState } from 'recoil';

function ThemeToggleButton() {
  const setTheme = useSetRecoilState(themeState);

  const toggle = () => {
    const htmlElement = document.querySelector('html');
    const isDarkMode = htmlElement?.classList.contains('dark');
    if (isDarkMode) {
      setTheme('light');
      return;
    }
    setTheme('dark');
  };

  return (
    <button type="button" onClick={toggle}>
      toggle
    </button>
  );
}

export default ThemeToggleButton;

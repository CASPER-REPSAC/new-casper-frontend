import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@app/_components/icons';
import { Toggle } from '@app/_shadcn/components/ui/toggle';

function DarkModeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
      return;
    }
    setTheme('dark');
  };

  return (
    <Toggle size="sm" onClick={toggleTheme}>
      {theme === 'light' ? <SunIcon /> : <MoonIcon />}
    </Toggle>
  );
}

export default DarkModeSwitch;

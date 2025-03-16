import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Skeleton } from '@app/_components/common';
import { MoonIcon, SunIcon } from '@app/_components/icons';
import { Toggle } from '@app/_shadcn/components/ui/toggle';

function DarkModeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return (
    <>
      {mounted ? (
        <Toggle size="sm" onClick={toggleTheme}>
          {theme === 'light' ? <SunIcon /> : <MoonIcon />}
        </Toggle>
      ) : (
        <Skeleton className="h-8 w-8 rounded" />
      )}
    </>
  );
}

export default DarkModeSwitch;

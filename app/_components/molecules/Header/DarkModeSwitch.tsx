import { MoonIcon, SunIcon } from '@app/_components/icons';
import { Switch } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

function DarkModeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const onValueChange = (isSelected: boolean) => {
    if (isSelected) {
      setTheme('light');
      return;
    }
    setTheme('dark');
  };

  return (
    <Switch
      isSelected={theme === 'light'}
      size="lg"
      color="primary"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      onValueChange={onValueChange}
    />
  );
}

export default DarkModeSwitch;

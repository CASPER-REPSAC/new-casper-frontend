import { MoonIcon, SunIcon } from '@app/_components/icons';
import { useTheme } from '@app/_hooks';
import { Switch } from '@nextui-org/react';

function DarkModeSwitch() {
  const { theme, setTheme } = useTheme();

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

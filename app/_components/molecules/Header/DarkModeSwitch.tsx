import { useTheme } from 'next-themes';
import { MoonIcon } from '@app/_components/icons';
import { Toggle } from '@app/_shadcn/components/ui/toggle';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@app/_shadcn/components/ui/tooltip';

const LIGHT_MODE_DISABLED_MESSAGE = '라이트 모드는 앞으로 제공되지 않습니다.';

function DarkModeSwitch() {
  const { theme, setTheme } = useTheme();

  const isLightModeRestricted = true;
  const isDisabled = isLightModeRestricted && theme === 'dark';

  const toggleTheme = () => {
    if (isDisabled) return;
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Toggle size="sm" onClick={toggleTheme}>
            <MoonIcon />
          </Toggle>
        </TooltipTrigger>
        <TooltipContent>{LIGHT_MODE_DISABLED_MESSAGE}</TooltipContent>
      </Tooltip>
    </>
  );
}

export default DarkModeSwitch;

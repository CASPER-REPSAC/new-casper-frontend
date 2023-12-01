import { ReactNode } from 'react';
import { useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { isDarkState } from '../../_store';
import { darkTheme, lightTheme } from '../../_styles/theme';

interface ThemeProps {
  children: ReactNode;
}

function ThemeWrapper({ children }: ThemeProps) {
  const isDark = useRecoilValue(isDarkState);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
}

export default ThemeWrapper;

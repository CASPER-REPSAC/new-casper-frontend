import { ReactNode } from 'react';
import { useRecoilValue } from 'recoil';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { isDarkState } from '../../recoil';
import { darkTheme, lightTheme } from '../../styles/theme';

interface ThemeProps {
  children: ReactNode;
}

function Theme({ children }: ThemeProps) {
  const isDark = useRecoilValue(isDarkState);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`
  html{
    font-size: 7px;
    @media screen and (min-width:1024px){
      font-size: 9px;
    }
    @media screen and (min-width:1440px){
      font-size: 10px;
    }
  }
  body{
    background-color: ${(props) => props.theme.surfaceDefault};
    color: ${(props) => props.theme.textDefault};
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

export default Theme;
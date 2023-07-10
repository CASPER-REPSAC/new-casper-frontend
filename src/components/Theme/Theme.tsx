import React from 'react';
import { useRecoilState } from 'recoil';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { isDarkState } from '../../atoms';
import { darkTheme, lightTheme } from '../../styles/theme';
const GlobalStyle = createGlobalStyle`
  html{
    font-size: 10px;
    @media screen and (max-width:1440px){
      font-size: 9px;
    }
  }
  body{
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

interface ThemeProps {
  children: React.ReactNode;
}

export default function Theme({ children }: ThemeProps) {
  const [isDark, setIsDark] = useRecoilState(isDarkState);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

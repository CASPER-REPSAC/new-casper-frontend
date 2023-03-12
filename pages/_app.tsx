import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/reset.css";
import { darkTheme } from "@/styles/theme";
import type { AppProps } from "next/app";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
  font-size: 10px;
  @media screen and (max-width:1300px){
    font-size: 9px;
  }
}
body{
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  font-family: 'Noto Sans KR', sans-serif;
}
`;

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
`;
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </Wrapper>
  );
}

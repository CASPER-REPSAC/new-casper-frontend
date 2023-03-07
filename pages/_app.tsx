import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/reset.css";
import { darkTheme } from "@/styles/theme";
import type { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  font-size: 10px;
  font-family: 'Noto Sans KR', sans-serif;
}
`;
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Header bgColor="transparent" />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

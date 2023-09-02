import type { AppProps } from 'next/app';
import styled from 'styled-components';
import { CookiesProvider } from 'react-cookie';
import { RecoilRoot } from 'recoil';
import '@src/styles/reset.css';
import Footer from '@src/components/common/Layout/Footer';
import Header from '@src/components/common/Layout/Header/index';
import Theme from '@src/components/Theme/index';

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <CookiesProvider>
        <Theme>
          <Wrapper>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </Wrapper>
        </Theme>
      </CookiesProvider>
    </RecoilRoot>
  );
}

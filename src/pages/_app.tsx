import Footer from '@src/components/Layout/Footer/Footer';
import Header from '@src/components/Layout/Header/Header';
import '../styles/reset.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import styled from 'styled-components';
import Theme from '@src/components/Theme/Theme';

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Theme>
        <Wrapper>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Wrapper>
      </Theme>
    </RecoilRoot>
  );
}

import type { AppProps } from 'next/app';
import styled from 'styled-components';
import { RecoilRoot } from 'recoil';
import '@src/styles/reset.css';
import Footer from '@src/components/common/Layout/Footer';
import Header from '@src/components/common/Layout/Header';
import Theme from '@src/components/Theme';

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

import type { AppProps } from 'next/app';
import styled from 'styled-components';
import { RecoilRoot } from 'recoil';
import '@src/styles/reset.css';
import Footer from '@src/components/common/Layout/Footer';
import Header from '@src/components/common/Layout/Header';
import Theme from '@src/components/Theme';
import { useRouter } from 'next/router';
import { ADMIN_PATH } from '@src/utils/urls';

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isFooter = !router.asPath.startsWith(ADMIN_PATH.home.url);

  return (
    <RecoilRoot>
      <Theme>
        <Wrapper>
          <Header />
          <Component {...pageProps} />
          {isFooter && <Footer />}
        </Wrapper>
      </Theme>
    </RecoilRoot>
  );
}

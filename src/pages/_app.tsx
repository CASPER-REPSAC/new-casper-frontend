import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { RecoilRoot } from 'recoil';
import '@src/styles/reset.css';
import Theme from '@src/components/Theme';
import { ADMIN_PATH } from '@src/utils/urls';
import AdminLayout from '@src/components/molecules/Layout/AdminLayout';
import CommonLayout from '@src/components/molecules/Layout/CommonLayout';
import styled from 'styled-components';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isAdminPage = router.asPath.startsWith(ADMIN_PATH.home.url);

  return (
    <RecoilRoot>
      <Theme>
        <Wrapper>
          {isAdminPage ? (
            <AdminLayout>
              <Component {...pageProps} />
            </AdminLayout>
          ) : (
            <CommonLayout>
              <Component {...pageProps} />
            </CommonLayout>
          )}
        </Wrapper>
      </Theme>
    </RecoilRoot>
  );
}

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

export default App;

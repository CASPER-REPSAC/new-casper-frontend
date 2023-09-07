import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { RecoilRoot } from 'recoil';
import '@src/styles/reset.css';
import Footer from '@src/components/common/Layout/Footer';
import Header from '@src/components/common/Layout/Header';
import Theme from '@src/components/Theme';
import AdminSideMenu from '@src/components/pages/admin/AdminSideMenu';
import { ADMIN_PATH } from '@src/utils/urls';

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;
const AdminPageWrapper = styled.div`
  display: flex;
`;

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isAdminPage = router.asPath.startsWith(ADMIN_PATH.home.url);
  return (
    <RecoilRoot>
      <Theme>
        <Wrapper>
          <Header />
          {isAdminPage ? (
            <AdminPageWrapper>
              <AdminSideMenu />
              <Component {...pageProps} />
            </AdminPageWrapper>
          ) : (
            <>
              <Component {...pageProps} />
              <Footer />
            </>
          )}
        </Wrapper>
      </Theme>
    </RecoilRoot>
  );
}

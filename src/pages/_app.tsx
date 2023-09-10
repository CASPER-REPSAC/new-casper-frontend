import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { RecoilRoot } from 'recoil';
import '@src/styles/reset.css';
import Theme from '@src/components/Theme';
import { ADMIN_PATH } from '@src/utils/urls';
import AdminLayout from '@src/components/molecules/Layout/AdminLayout';
import CommonLayout from '@src/components/molecules/Layout/CommonLayout';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isAdminPage = router.asPath.startsWith(ADMIN_PATH.home.url);

  return (
    <RecoilRoot>
      <Theme>
        {isAdminPage ? (
          <AdminLayout>
            <Component {...pageProps} />
          </AdminLayout>
        ) : (
          <CommonLayout>
            <Component {...pageProps} />
          </CommonLayout>
        )}
      </Theme>
    </RecoilRoot>
  );
}

export default App;

import '@src/styles/reset.css';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { RecoilRoot } from 'recoil';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import Theme from '@src/components/utilComponents/Theme';
import AdminLayout from '@src/components/Layout/AdminLayout';
import PopupWrapper from '@src/components/molecules/PopupWrapper';
import PageLoadingPresence from '@src/components/utilComponents/PageLoadingPresence';
import AutoLoginPresence from '@src/components/utilComponents/AutoLoginPresence';
import DefaultLayout from '@src/components/Layout/DefaultLayout';
import { AppPropsWithLayout } from '@src/types/layout';
import { ADMIN_PATH } from '@src/utils/urls';

function App({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();
  const [queryClient] = useState(() => new QueryClient());
  const getLayout =
    Component.getLayout ||
    ((page) => {
      const isAdminPage = router.asPath.startsWith(ADMIN_PATH.home.url);
      return isAdminPage ? (
        <AdminLayout>{page}</AdminLayout>
      ) : (
        <DefaultLayout>{page}</DefaultLayout>
      );
    });

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RecoilRoot>
          <AutoLoginPresence>
            <Theme>
              <PopupWrapper />
              <PageLoadingPresence>
                {getLayout(<Component {...pageProps} />)}
              </PageLoadingPresence>
            </Theme>
          </AutoLoginPresence>
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default App;

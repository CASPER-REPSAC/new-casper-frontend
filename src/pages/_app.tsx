import '@src/styles/reset.css';
import { styled } from 'styled-components';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import PopupWrapper from '@src/components/organism/PopupWrapper';
import { AppPropsWithLayout } from '@src/types/layout';
import { ADMIN_PATH } from '@src/constants/urls';
import { AdminLayout, DefaultLayout } from '@src/components/organism/layout';
import {
  AutoLoginPresence,
  PageLoadingPresence,
  Theme,
} from '@src/components/utilComponents';

function App({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: { staleTime: 60 * 1000 },
        },
      }),
  );

  const getLayout =
    Component.getLayout ||
    ((page) => {
      const isAdminPage = router.asPath.startsWith(ADMIN_PATH.home.url);
      return isAdminPage ? <AdminLayout>{page}</AdminLayout> : <>{page}</>;
    });

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <AutoLoginPresence>
          <Theme>
            <PopupWrapper />
            <PageLoadingPresence>
              <DefaultLayout>
                {getLayout(<Component {...pageProps} />)}
                <Component {...pageProps} />
              </DefaultLayout>
            </PageLoadingPresence>
          </Theme>
        </AutoLoginPresence>
      </RecoilRoot>
      <Temp>
        <ReactQueryDevtools initialIsOpen={false} />
      </Temp>
    </QueryClientProvider>
  );
}

const Temp = styled.div`
  font-size: 2rem;
`;

export default App;

import '@src/styles/reset.css';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Theme from '@src/components/utilComponents/Theme';
import PopupWrapper from '@src/components/organism/PopupWrapper';
import PageLoadingPresence from '@src/components/utilComponents/PageLoadingPresence';
import AutoLoginPresence from '@src/components/utilComponents/AutoLoginPresence';
import { AppPropsWithLayout } from '@src/types/layout';
import { ADMIN_PATH } from '@src/constants/urls';
import { AdminLayout, DefaultLayout } from '@src/components/organism/layout';
import styled from 'styled-components';

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

  // const isEmptyProps = Object.keys(pageProps).length === 0;
  // if (isEmptyProps) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <AutoLoginPresence>
          <Theme>
            <PopupWrapper />
            <PageLoadingPresence>
              <DefaultLayout>
                {getLayout(<Component {...pageProps} />)}
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

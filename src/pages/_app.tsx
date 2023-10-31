import '@src/styles/reset.css';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { RecoilRoot } from 'recoil';
import styled from 'styled-components';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import Theme from '@src/components/utilComponents/Theme';
import AdminLayout from '@src/components/organism/Layout/AdminLayout';
import CommonLayout from '@src/components/organism/Layout/CommonLayout';
import PopupWrapper from '@src/components/molecules/PopupWrapper';
import { ADMIN_PATH } from '@src/utils/urls';
import PageShadow from '@src/components/common/PageShadow';
import PageLoadingPresence from '@src/components/utilComponents/PageLoadingPresence';
import AutoLoginPresence from '@src/components/utilComponents/AutoLoginPresence';

interface MyAppProps extends AppProps {
  loginData: {
    accessToken: string;
    refreshToken: string;
  };
}

function App({ Component, pageProps }: MyAppProps) {
  const router = useRouter();
  const isAdminPage = router.asPath.startsWith(ADMIN_PATH.home.url);
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RecoilRoot>
          <AutoLoginPresence>
            <Theme>
              <PopupWrapper />
              <PageShadow />
              <PageLoadingPresence>
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
              </PageLoadingPresence>
            </Theme>
          </AutoLoginPresence>
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  );
}

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  padding-bottom: 200px;
`;

export default App;

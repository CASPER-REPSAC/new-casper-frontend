import '@src/styles/reset.css';
import '@src/styles/editor.css';

import type { AppContext, AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import { MutableSnapshot, RecoilRoot } from 'recoil';
import styled from 'styled-components';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import cookies from 'next-cookies';
import Theme from '@src/components/Theme';
import AdminLayout from '@src/components/molecules/Layout/AdminLayout';
import CommonLayout from '@src/components/molecules/Layout/CommonLayout';
import PopupWrapper from '@src/components/molecules/PopupWrapper';
import { accessTokenState, loginState } from '@src/atoms';
import { ADMIN_PATH } from '@src/utils/urls';

interface MyAppProps extends AppProps {
  loginData: {
    accessToken: string;
    refreshToken: string;
  };
}

function App({ Component, pageProps, loginData }: MyAppProps) {
  const router = useRouter();
  const isAdminPage = router.asPath.startsWith(ADMIN_PATH.home.url);
  const [queryClient] = useState(() => new QueryClient());

  const initializer = useMemo(
    () =>
      ({ set }: MutableSnapshot) => {
        if (loginData.accessToken) {
          set(loginState, true);
          set(accessTokenState, loginData.accessToken);
        } else if (loginData.refreshToken) {
          set(loginState, true);
        } else {
          set(loginState, false);
        }
      },
    [loginData],
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RecoilRoot initializeState={initializer}>
          <Theme>
            <PopupWrapper />
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
      </Hydrate>
    </QueryClientProvider>
  );
}

App.getInitialProps = async (context: AppContext) => {
  const { ctx, Component } = context;
  const { refreshToken, accessToken } = cookies(ctx);

  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  const loginData = {
    accessToken,
    refreshToken,
  };

  return { pageProps, loginData };
};

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

export default App;

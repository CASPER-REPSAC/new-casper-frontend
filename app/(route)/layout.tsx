import 'app/_styles/reset.css';
import 'app/_styles/global.css';
import { ReactNode } from 'react';
import {
  AutoLoginPresence,
  PopupWrapper,
  QueryWrapper,
  RecoilRootWrapper,
  SyncTheme,
} from 'app/(route)/_providers';
import { DefaultLayout } from 'app/_components/layout';

export const metadata = {
  title: 'Casper',
  description: 'Changwon National University Casper',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-tr from-gray-50 via-sky-50 to-indigo-50 text-slate-600 dark:bg-gray-800 dark:text-white">
        <QueryWrapper>
          <RecoilRootWrapper>
            <SyncTheme>
              <AutoLoginPresence>
                <PopupWrapper />
                <DefaultLayout>{children}</DefaultLayout>
              </AutoLoginPresence>
            </SyncTheme>
          </RecoilRootWrapper>
        </QueryWrapper>
      </body>
    </html>
  );
}

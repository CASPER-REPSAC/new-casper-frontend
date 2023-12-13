import 'app/_styles/reset.css';
import 'app/_styles/global.css';
import { ReactNode } from 'react';
import {
  PopupWrapper,
  QueryWrapper,
  RecoilRootWrapper,
  SyncThemeScript,
  AutoLoginPresence,
} from 'app/_components/providers';
import { DefaultLayout } from 'app/_components/layout';

export const metadata = {
  title: 'Casper',
  description: 'Changwon National University Casper',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="font-sans">
      <head>
        <SyncThemeScript />
      </head>
      <body
        className="
        bg-gradient-to-br
        from-sky-50
        via-white
        to-sky-50
        text-slate-600
        dark:bg-slate-900
        dark:bg-gradient-to-br
        dark:from-slate-900
        dark:via-sky-950
        dark:to-slate-900
        dark:text-white
        "
      >
        <QueryWrapper>
          <RecoilRootWrapper>
            <AutoLoginPresence>
              <PopupWrapper />
              <DefaultLayout>{children}</DefaultLayout>
            </AutoLoginPresence>
          </RecoilRootWrapper>
        </QueryWrapper>
      </body>
    </html>
  );
}

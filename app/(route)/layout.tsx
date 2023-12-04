import 'app/_styles/reset.css';
import 'app/_styles/global.css';
import { ReactNode } from 'react';
import {
  AutoLoginPresence,
  PopupWrapper,
  QueryWrapper,
  RecoilRootWrapper,
} from 'app/(route)/_providers';
import { DefaultLayout } from 'app/_components/layout';

export const metadata = {
  title: 'Casper',
  description: 'Changwon National University Casper',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-100 dark:bg-gray-800 dark:text-white">
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

import 'app/_styles/reset.css';
import 'app/_styles/global.css';
import { ReactNode } from 'react';
import StyledComponentsRegistry from 'app/_lib/registry';
import {
  AutoLoginPresence,
  PopupWrapper,
  QueryWrapper,
  RecoilRootWrapper,
  ThemeWrapper,
} from 'app/(route)/_providers';
import { DefaultLayout } from './_components';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-800 text-white">
        <QueryWrapper>
          <RecoilRootWrapper>
            <AutoLoginPresence>
              <StyledComponentsRegistry>
                <ThemeWrapper>
                  <PopupWrapper />
                  <DefaultLayout>{children}</DefaultLayout>
                </ThemeWrapper>
              </StyledComponentsRegistry>
            </AutoLoginPresence>
          </RecoilRootWrapper>
        </QueryWrapper>
      </body>
    </html>
  );
}

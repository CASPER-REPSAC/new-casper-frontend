import '@app/_styles/reset.css';
import '@app/_styles/global.css';
import { ReactNode } from 'react';
import {
  PopupWrapper,
  QueryWrapper,
  RecoilRootWrapper,
  NextUIWrapper,
  AutoLoginPresence,
} from '@app/_components/providers';
import { DefaultLayout } from '@app/_components/layout';
import { ThemeProvider } from '@app/_components/providers/ThemeProvider';
import { Inter as FontSans } from 'next/font/google';
import { cn } from '@app/_shadcn/lib/utils';

export const metadata = {
  title: 'Casper',
  description: 'Changwon National University Casper',
};

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <QueryWrapper>
          <RecoilRootWrapper>
            <ThemeProvider>
              <AutoLoginPresence />
              <NextUIWrapper>
                <PopupWrapper />
                <DefaultLayout>{children}</DefaultLayout>
              </NextUIWrapper>
            </ThemeProvider>
          </RecoilRootWrapper>
        </QueryWrapper>
      </body>
    </html>
  );
}

// import '@app/_styles/reset.css';
import '@app/_styles/global.css';
import { ReactNode } from 'react';
import {
  QueryWrapper,
  RecoilRootWrapper,
  NextUIWrapper,
  AutoLoginPresence,
} from '@app/_components/providers';
import { DefaultLayout } from '@app/_components/layout';
import { ThemeProvider } from '@app/_components/providers/ThemeProvider';
import { Inter as FontSans } from 'next/font/google';
import { cn } from '@app/_shadcn/lib/utils';
import { Toaster } from '@app/_shadcn/components/ui/toaster';

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
                <DefaultLayout>{children}</DefaultLayout>
                <Toaster />
              </NextUIWrapper>
            </ThemeProvider>
          </RecoilRootWrapper>
        </QueryWrapper>
      </body>
    </html>
  );
}

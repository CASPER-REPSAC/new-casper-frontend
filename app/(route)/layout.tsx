// import '@app/_styles/reset.css';
import { Inter as FontSans } from 'next/font/google';
import { ReactNode } from 'react';
import { DefaultLayout } from '@app/_components/layout';
import { QueryWrapper } from '@app/_components/providers';
import { ThemeProvider } from '@app/_components/providers/ThemeProvider';
import '@app/_styles/global.css';
import { Toaster } from '@app/_shadcn/components/ui/toaster';
import { TooltipProvider } from '@app/_shadcn/components/ui/tooltip';
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
          <ThemeProvider>
            <TooltipProvider>
              <DefaultLayout>{children}</DefaultLayout>
            </TooltipProvider>
            <Toaster />
          </ThemeProvider>
        </QueryWrapper>
      </body>
    </html>
  );
}

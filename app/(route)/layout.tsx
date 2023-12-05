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
import Script from 'next/script';

export const metadata = {
  title: 'Casper',
  description: 'Changwon National University Casper',
};

function SyncThemeScript() {
  const scriptFn = () => {
    const savedTheme = localStorage.getItem('theme');

    const htmlElement = document.querySelector('html');

    switch (savedTheme) {
      case 'ligth':
        htmlElement?.classList.remove('dark');
        break;
      case 'dark':
        htmlElement?.classList.add('dark');
        break;
      default:
        htmlElement?.classList.add('dark');
    }
  };

  const scriptStr = `
    (${scriptFn.toString()})();
  `;

  return <Script id="theme" dangerouslySetInnerHTML={{ __html: scriptStr }} />;
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="font-sans">
      <head>
        <SyncThemeScript />
      </head>
      <body
        className="
        bg-white
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

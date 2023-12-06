import { ReactNode, useLayoutEffect } from 'react';
import { Footer, Header } from 'app/_components/molecules';
import { useRecoilValue } from 'recoil';
import themeState from 'app/_store/themeAtom';

interface Props {
  children: ReactNode;
}

function DefaultLayout({ children }: Props) {
  const theme = useRecoilValue(themeState);

  useLayoutEffect(() => {
    const htmlElement = document.querySelector('html');

    switch (theme) {
      case 'dark':
        htmlElement?.classList.add('dark');
        break;
      case 'light':
        htmlElement?.classList.remove('dark');
        break;
      default:
        htmlElement?.classList.add('dark');
    }
  }, [theme]);

  console.log('[Default]');

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default DefaultLayout;

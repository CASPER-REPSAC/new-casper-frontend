import { ReactNode, useLayoutEffect } from 'react';
import { Footer, Header } from 'app/_components/molecules';
import { useTheme } from 'app/_hooks';

interface Props {
  children: ReactNode;
}

function DefaultLayout({ children }: Props) {
  const { theme } = useTheme();

  useLayoutEffect(() => {
    const htmlElement = document.querySelector('html');
    htmlElement?.classList.add(theme);
  }, [theme]);
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default DefaultLayout;

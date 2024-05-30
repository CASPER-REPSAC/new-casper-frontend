import { ReactNode } from 'react';
import { Footer, Header } from '@app/_components/molecules';

interface Props {
  children: ReactNode;
}

function DefaultLayout({ children }: Props) {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Header />
      <main className="relative min-h-screen flex-1 overflow-x-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default DefaultLayout;

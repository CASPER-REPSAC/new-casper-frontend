import { ReactNode } from 'react';
import { Footer, Header } from 'app/_components/molecules';

interface Props {
  children: ReactNode;
}

function DefaultLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="relative flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default DefaultLayout;

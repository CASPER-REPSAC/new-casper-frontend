import { ReactNode } from 'react';
import { Footer, Header } from 'app/_components/molecules';

interface Props {
  children: ReactNode;
}

function DefaultLayout({ children }: Props) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 f">{children}</main>
      <Footer />
    </div>
  );
}

export default DefaultLayout;

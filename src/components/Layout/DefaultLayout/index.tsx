import Footer from '@src/components/organism/Footer';
import Header from '@src/components/organism/Header';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function DefaultLayout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default DefaultLayout;

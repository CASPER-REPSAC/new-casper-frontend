import Footer from '@src/components/common/Layout/Footer';
import Header from '@src/components/common/Layout/Header';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
function CommonLayout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default CommonLayout;

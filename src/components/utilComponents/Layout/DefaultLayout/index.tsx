import DefaultPageWrapper from '@src/components/common/DefaultPageWrapper';
import Footer from '@src/components/organism/Footer';
import Navigation from '@src/components/organism/Header';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function DefaultLayout({ children }: Props) {
  return (
    <DefaultPageWrapper>
      <Navigation />
      {children}
      <Footer />
    </DefaultPageWrapper>
  );
}

export default DefaultLayout;

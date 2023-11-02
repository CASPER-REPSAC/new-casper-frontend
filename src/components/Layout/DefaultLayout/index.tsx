import Footer from '@src/components/organism/Footer';
import Header from '@src/components/organism/Header';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

function DefaultLayout({ children }: Props) {
  return (
    <Wrapper>
      <Header />
      {children}
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 60px;
`;

export default DefaultLayout;

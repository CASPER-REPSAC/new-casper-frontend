import Footer from '@src/components/common/Layout/Footer';
import Header from '@src/components/organism/Header';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}
function CommonLayout({ children }: Props) {
  return (
    <Wrapper>
      <Header />
      {children}
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  padding-bottom: 200px;
`;

export default CommonLayout;

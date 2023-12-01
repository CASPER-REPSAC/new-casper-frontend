import { ReactNode } from 'react';
import { styled } from 'styled-components';
import { Footer, Header } from 'app/_components/molecules';

interface Props {
  children: ReactNode;
}

function DefaultLayout({ children }: Props) {
  return (
    <DefaultPageWrapper>
      <Header />
      {children}
      <Footer />
    </DefaultPageWrapper>
  );
}

const DefaultPageWrapper = styled.div`
  position: relative;
  padding: 60px 0 160px;
  min-height: 100vh;
`;

export default DefaultLayout;

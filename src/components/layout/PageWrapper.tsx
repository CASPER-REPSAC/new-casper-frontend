import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100vw;

  padding: 0 160px 0 160px;
  box-sizing: border-box;
  @media screen and (max-width: 1440px) {
    padding: 0 40px 0 40px;
  }
`;

interface IPageWrapper {
  children: React.ReactNode;
}

function PageWrapper({ children }: IPageWrapper) {
  return <Wrapper>{children}</Wrapper>;
}

export default PageWrapper;

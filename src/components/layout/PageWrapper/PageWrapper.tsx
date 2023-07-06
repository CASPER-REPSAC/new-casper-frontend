import React from 'react';
import styled from 'styled-components';
import { Wrapper } from './PageWrapper.style';

interface IPageWrapper {
  children: React.ReactNode;
}

function PageWrapper({ children }: IPageWrapper) {
  return <Wrapper>{children}</Wrapper>;
}

export default PageWrapper;

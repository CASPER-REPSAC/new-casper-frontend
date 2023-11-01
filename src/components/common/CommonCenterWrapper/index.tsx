import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface CommonCenterWrapperProps extends HTMLAttributes<HTMLDivElement> {}

function CommonCenterWrapper({ ...props }: CommonCenterWrapperProps) {
  return <Wrapper {...props} />;
}

const Wrapper = styled.div`
  /* Mobile */

  width: 90vw;

  /* Tablet */
  @media screen and (min-width: 768px) {
    width: 760px;
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    width: 1000px;
  }

  @media screen and (min-width: 1440px) {
    width: 1400px;
  }

  margin: 0 auto;
`;

export default CommonCenterWrapper;

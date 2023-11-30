import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {}

function AdminCenterWrapper({ ...props }: Props) {
  return <Wrapper {...props} />;
}

const Wrapper = styled.div`
  /* Desktop */
  @media screen and (min-width: 1024px) {
    width: 800px;
  }

  @media screen and (min-width: 1440px) {
    width: 1000px;
  }

  margin: 100px auto;
`;

export default AdminCenterWrapper;

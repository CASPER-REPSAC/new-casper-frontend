import styled from 'styled-components';

export const Wrapper = styled.div`
  /* Mobile */
  width: 480px;

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

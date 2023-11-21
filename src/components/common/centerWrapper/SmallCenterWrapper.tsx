import { styled } from 'styled-components';

const SmallCenterWrapper = styled.div`
  /* Mobile */

  width: 90vw;

  /* Tablet */
  @media screen and (min-width: 768px) {
    width: 90vw;
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    width: 500px;
  }

  @media screen and (min-width: 1440px) {
    width: 500px;
  }

  margin: 0 auto;
`;

export default SmallCenterWrapper;

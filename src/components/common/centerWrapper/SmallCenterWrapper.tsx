import { styled } from 'styled-components';

const SmallCenterWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;

  /* Mobile */
  width: 90vw;

  /* Tablet */
  @media screen and (min-width: 768px) {
    width: 500px;
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    width: 500px;
  }

  @media screen and (min-width: 1440px) {
    width: 500px;
  }
`;

export default SmallCenterWrapper;

import { styled } from 'styled-components';

const DefaultForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 450px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
  @media screen and (min-width: 1024px) {
    width: 500px;
  }
  @media screen and (min-width: 1440px) {
    width: 550px;
  }
`;

export default DefaultForm;

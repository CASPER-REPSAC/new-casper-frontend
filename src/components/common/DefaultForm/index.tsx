import { styled } from 'styled-components';

const DefaultForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 450px;
  @media screen and (min-width: 768px) {
    width: 550px;
  }
  @media screen and (min-width: 1024px) {
    width: 600px;
  }
  @media screen and (min-width: 1440px) {
    width: 700px;
  }
`;

export default DefaultForm;

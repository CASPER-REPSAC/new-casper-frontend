import { styled } from 'styled-components';

const FormErrorWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.6em;
  color: ${({ theme }) => theme.red100};
  font-size: 1.4rem;
  margin: 0;
`;

export default FormErrorWrapper;

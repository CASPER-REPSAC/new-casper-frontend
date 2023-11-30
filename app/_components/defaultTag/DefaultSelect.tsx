import styled from 'styled-components';

const DefaultSelect = styled.select`
  background-color: ${({ theme }) => theme.inputSurface};
  color: ${({ theme }) => theme.textDefault};

  font-size: 1.8rem;
  border: none;
  padding: 0 1rem;
  height: 40px;
  cursor: pointer;
`;

export default DefaultSelect;

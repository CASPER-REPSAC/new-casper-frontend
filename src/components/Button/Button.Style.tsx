import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  width: 90px;
  height: 40px;
  color: ${({ theme }) => theme.textColor};
  background-color: inherit;
  border: 1px solid ${({ theme }) => theme.liquid};
  cursor: pointer;
  font-size: 1.6rem;
  :hover {
    background-color: ${({ theme }) => theme.liquid};
  }
`;

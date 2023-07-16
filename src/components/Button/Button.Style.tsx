import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  width: 90px;
  height: 40px;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.green100};
  border: none;
  cursor: pointer;
  font-size: 1.6rem;
  :hover {
    background-color: ${({ theme }) => theme.green200};
  }
`;

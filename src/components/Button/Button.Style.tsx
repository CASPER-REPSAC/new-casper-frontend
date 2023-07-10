import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  width: 90px;
  height: 40px;
  color: ${({ theme }) => theme.textColor};
  background-color: inherit;
  border: 1px solid ${({ theme }) => theme.border};
  cursor: pointer;
  font-size: 1.6rem;
  :hover {
    background-color: ${({ theme }) => theme.color1};
    border: 1px solid ${({ theme }) => theme.color2};
  }
`;

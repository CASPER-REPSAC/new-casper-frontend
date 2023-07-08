import styled from 'styled-components';

export const InputWrapper = styled.input`
  :focus {
    border-color: ${({ theme }) => theme.textColor};
    outline: none;
  }
  background-color: ${({ theme }) => theme.bgColor};
  border: 1px solid ${({ theme }) => theme.color2};
  color: ${({ theme }) => theme.textColor};
  padding-left: 10px;
  padding-right: 10px;
  font-size: 1.5rem;
  box-sizing: border-box;
`;

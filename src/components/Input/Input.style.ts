import styled from 'styled-components';

export const InputWrapper = styled.input`
  :focus {
    border-color: ${({ theme }) => theme.borderBold};
    outline: none;
  }
  background-color: ${({ theme }) => theme.surfaceDefault};
  border: 1px solid ${({ theme }) => theme.borderDefault};
  color: ${({ theme }) => theme.textDefault};
  padding-left: 10px;
  padding-right: 10px;
  font-size: 1.5rem;
  box-sizing: border-box;
  height: 50px;
  width: 400px;
`;

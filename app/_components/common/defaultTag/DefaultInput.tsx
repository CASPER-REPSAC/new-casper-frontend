import styled, { css } from 'styled-components';

export const DefaultInputStyle = css`
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: ${({ theme }) => theme.textDefault};
    -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.inputSurface}
      inset;
  }
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.borderBold};
  }
  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.disabledInputSurface};
    color: ${({ theme }) => theme.textWeek};
  }
  background-color: ${({ theme }) => theme.inputSurface};
  border: 1px solid ${({ theme }) => theme.borderDefault};
  color: ${({ theme }) => theme.textDefault};
  border-radius: 3px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 1.5rem;
  box-sizing: border-box;
  height: 50px;
  width: 100%;
`;

const DefaultInput = styled.input`
  ${DefaultInputStyle}
`;

export default DefaultInput;

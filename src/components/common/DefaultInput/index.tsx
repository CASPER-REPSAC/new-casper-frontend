/* eslint-disable react/jsx-props-no-spreading */
import { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styled, { css } from 'styled-components';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn;
}

function DefaultInput({ register, ...props }: Props) {
  return <InputWrapper {...props} {...register} />;
}

export const DefaultInputStyle = css`
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.borderBold};
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

export const InputWrapper = styled.input`
  ${DefaultInputStyle}
`;

export default DefaultInput;

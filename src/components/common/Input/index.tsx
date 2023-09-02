/* eslint-disable react/jsx-props-no-spreading */
import { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styled from 'styled-components';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn;
}

function Input({ register, ...props }: Props) {
  return <InputWrapper {...props} {...register} />;
}

const InputWrapper = styled.input`
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
  width: 100%;
`;

export default Input;

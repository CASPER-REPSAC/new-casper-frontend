/* eslint-disable react/jsx-props-no-spreading */
import { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styled from 'styled-components';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn;
}

function DefaultInput({ register, ...props }: Props) {
  return <InputWrapper {...props} {...register} />;
}

const InputWrapper = styled.input`
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.borderBold};
  }
  background-color: ${({ theme }) => theme.surfacePointAlt};
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

export default DefaultInput;

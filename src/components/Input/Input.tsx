import { InputHTMLAttributes } from 'react';
import { InputWrapper } from './Input.style';
import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn;
}

function Input({ register, ...props }: Props) {
  return <InputWrapper {...props} {...register} />;
}

export default Input;

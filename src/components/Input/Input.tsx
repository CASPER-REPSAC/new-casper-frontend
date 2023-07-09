import { ForwardedRef, InputHTMLAttributes } from 'react';
import { InputWrapper } from './Input.style';
import React from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

function Input(props: Props, ref: ForwardedRef<HTMLInputElement>) {
  return <InputWrapper {...props} />;
}

export default React.forwardRef(Input);

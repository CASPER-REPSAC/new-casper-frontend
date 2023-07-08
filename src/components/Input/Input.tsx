import { InputHTMLAttributes } from 'react';
import { InputWrapper } from './Input.style';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

function DefaultInput({ ...props }: Props) {
  return <InputWrapper {...props} />;
}

export default DefaultInput;

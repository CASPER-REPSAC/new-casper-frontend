import { ButtonHTMLAttributes } from 'react';
import { ButtonWrapper } from './Button.Style';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({ ...props }: ButtonProps) {
  return <ButtonWrapper {...props} />;
}

export default Button;

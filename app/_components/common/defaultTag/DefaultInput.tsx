import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

function DefaultInput(
  { className, disabled, ...props }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const disabledClassName = disabled ? 'disabled' : '';

  return (
    <input
      ref={ref}
      className={`input ${disabledClassName} ${className}`}
      disabled={disabled}
      {...props}
    />
  );
}

export default forwardRef(DefaultInput);

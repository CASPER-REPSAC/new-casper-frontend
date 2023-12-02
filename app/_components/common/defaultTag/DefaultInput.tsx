import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

function DefaultInput(
  { className, ...props }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const defaultClassName = 'input';

  return (
    <input
      ref={ref}
      className={`${defaultClassName} ${className}`}
      {...props}
    />
  );
}

export default forwardRef(DefaultInput);

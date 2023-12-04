import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

function DefaultInput(
  { className, disabled, ...props }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const defaultClassName = 'input';
  const disabledClassName = disabled
    ? 'bg-slate-300 dark:bg-gray-700 cursor-not-allowed'
    : '';

  return (
    <input
      ref={ref}
      className={`${defaultClassName} ${disabledClassName} ${className}`}
      disabled={disabled}
      {...props}
    />
  );
}

export default forwardRef(DefaultInput);

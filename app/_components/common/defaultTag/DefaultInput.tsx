import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

function DefaultInput(
  { className, disabled, ...props }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const defaultClassName = `
  block 
  w-full
  rounded 
    border 
    border-solid border-slate-200 bg-white 
    px-4 py-3 
    focus:outline-none 
    focus:ring-1 
    focus:ring-inset 
    dark:border-slate-600 
    dark:bg-transparent 
    dark:autofill:!bg-yellow-200
  `;
  const disabledClassName = disabled
    ? `bg-slate-200
    dark:bg-slate-300 dark:bg-gray-700 cursor-not-allowed`
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

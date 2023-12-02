import { ForwardedRef, TextareaHTMLAttributes, forwardRef } from 'react';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

function DefaultTextarea(
  { className = '', ...props }: Props,
  ref: ForwardedRef<HTMLTextAreaElement>,
) {
  const defaultClassName = 'input';

  return (
    <textarea
      ref={ref}
      spellCheck={false}
      className={`${defaultClassName} ${className}`}
      {...props}
    />
  );
}

export default forwardRef(DefaultTextarea);

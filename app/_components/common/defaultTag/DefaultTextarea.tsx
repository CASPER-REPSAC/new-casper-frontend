import { TextareaHTMLAttributes } from 'react';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

function DefaultTextarea({ className = '', ...props }: Props) {
  const defaultClassName = 'input';

  return (
    <textarea
      spellCheck={false}
      className={`${defaultClassName} ${className}`}
      {...props}
    />
  );
}

export default DefaultTextarea;

import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'red' | 'green' | 'default';
  size?: 'sm' | 'm' | 'lg';
}

function DefaultButton({
  type,
  children,
  disabled,
  className: additionalClassName,
  theme = 'default',
  size = 'm',
  ...restProps
}: Props) {
  const disabledClassName = disabled ? 'btn-disabled' : '';
  const className = `btn btn-${theme} btn-${size} ${disabledClassName} ${additionalClassName}`;

  return (
    <button
      className={`${className}`}
      type={type === 'button' ? 'button' : 'submit'}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default DefaultButton;

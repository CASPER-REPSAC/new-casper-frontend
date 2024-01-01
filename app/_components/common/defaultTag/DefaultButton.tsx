import { BUTTON_SIZE_CSS, BUTTON_THEME_CSS } from '@app/_constants/css';
import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'primary' | 'danger' | 'default';
  size?: 'sm' | 'm' | 'lg';
}

function DefaultButton({
  type,
  children,
  disabled,
  className: additionalClassName = '',
  theme = 'default',
  size = 'm',
  ...restProps
}: Props) {
  const disabledClassName = disabled ? 'disabled' : '';
  const className = `btn ${BUTTON_SIZE_CSS[size]} ${BUTTON_THEME_CSS[theme]} ${disabledClassName}`;

  return (
    <button
      className={`${className} ${additionalClassName}`}
      type={type === 'button' ? 'button' : 'submit'}
      {...restProps}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default DefaultButton;

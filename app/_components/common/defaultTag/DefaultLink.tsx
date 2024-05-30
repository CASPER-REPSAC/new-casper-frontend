import { BUTTON_SIZE_CSS, BUTTON_THEME_CSS } from '@app/_constants/css';
import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

interface Props extends LinkProps {
  theme?: 'danger' | 'primary' | 'default';
  size?: 'sm' | 'm' | 'lg';
  className?: string;
  children: ReactNode;
}

function DefaultLink({
  theme = 'default',
  size = 'm',
  children,
  className,
  ...props
}: Props) {
  const defaultClassName = `block text-center btn ${BUTTON_SIZE_CSS[size]} ${BUTTON_THEME_CSS[theme]}`;

  return (
    <Link className={`${defaultClassName} ${className}`} {...props}>
      {children}
    </Link>
  );
}

export default DefaultLink;

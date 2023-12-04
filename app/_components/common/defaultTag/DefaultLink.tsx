import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

interface Props extends LinkProps {
  theme?: 'red' | 'green' | 'default';
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
  const defaultClassName = `block text-center btn btn-${theme} btn-${size}`;

  return (
    <Link className={`${defaultClassName} ${className}`} {...props}>
      {children}
    </Link>
  );
}

export default DefaultLink;

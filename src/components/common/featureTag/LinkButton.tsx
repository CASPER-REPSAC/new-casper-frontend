import { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';
import { DefaultButton, DefaultButtonProps } from '../defaultTag';

interface Props extends LinkProps, DefaultButtonProps {
  children: ReactNode;
}

function LinkButton({ $size, $full, children, ...props }: Props) {
  return (
    <Link {...props}>
      <DefaultButton $size={$size} $color="default" $full={$full}>
        {children}
      </DefaultButton>
    </Link>
  );
}

export default LinkButton;

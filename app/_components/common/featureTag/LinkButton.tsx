import { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';
import DefaultButton from '../defaultTag/DefaultButton';
import { DefaultButtonProps } from '../defaultTag/DefaultButton/interface';

interface Props extends LinkProps, DefaultButtonProps {
  children: ReactNode;
}

function LinkButton({ $size, $color, $full, children, ...props }: Props) {
  return (
    <Link {...props}>
      <DefaultButton $size={$size} $color={$color} $full={$full}>
        {children}
      </DefaultButton>
    </Link>
  );
}

export default LinkButton;

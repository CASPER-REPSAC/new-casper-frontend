import { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';
import {
  DefaultButton,
  DefaultButtonProps,
} from '../../../../app/_components/common/defaultTag';

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

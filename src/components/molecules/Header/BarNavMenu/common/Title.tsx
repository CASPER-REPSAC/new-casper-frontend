import { DefaultButton } from '@src/components/common/defaultTag';
import { MouseEventHandler, ReactNode } from 'react';
import { styled } from 'styled-components';

interface Props {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

function Title({ children, onClick }: Props) {
  return (
    <Wrapper $full onClick={onClick}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled(DefaultButton)`
  height: 100%;
`;

export default Title;

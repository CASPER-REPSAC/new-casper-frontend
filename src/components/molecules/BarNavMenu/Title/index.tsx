import DefaultButton from '@src/components/common/DefaultButton';
import { MouseEventHandler, ReactNode } from 'react';
import { styled } from 'styled-components';

interface Props {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

function Title({ children, onClick }: Props) {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
}

const Wrapper = styled(DefaultButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export default Title;

import Z_INDEX from '@src/constants/zIndex';
import { MouseEventHandler, ReactElement } from 'react';
import styled from 'styled-components';

interface Props {
  children?: ReactElement;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

function PageShadow({ children, onClick }: Props) {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
}

const Wrapper = styled.div`
  position: fixed;
  z-index: ${Z_INDEX.pageShadow};
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`;
export default PageShadow;

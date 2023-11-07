import { pageShadowState } from '@src/atoms';
import Z_INDEX from '@src/constants/zIndex';
import { MouseEventHandler, ReactElement } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

interface Props {
  children?: ReactElement;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

function PageShadow({ children, onClick }: Props) {
  const visible = useRecoilValue(pageShadowState);

  return (
    <Wrapper $visible={visible} onClick={onClick}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div<{ $visible: boolean }>`
  position: fixed;
  z-index: ${Z_INDEX.pageShadow};
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: all 0.3s ease;
`;
export default PageShadow;

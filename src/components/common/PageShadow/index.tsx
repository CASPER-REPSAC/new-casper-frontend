import { pageShadowState } from '@src/atoms';
import Z_INDEX from '@src/utils/zIndex';
import { useRecoilValue } from 'recoil';
import styled, { css } from 'styled-components';

function PageShadow() {
  const visible = useRecoilValue(pageShadowState);

  return <Wrapper $visible={visible} />;
}

const Wrapper = styled.div<{ $visible: boolean }>`
  ${({ $visible }) =>
    $visible
      ? css`
          visibility: visible;
          opacity: 1;
        `
      : css`
          visibility: hidden;
          opacity: 0;
        `}
  position: fixed;
  z-index: ${Z_INDEX.pageShadow};
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  transition: all 0.3s ease;
`;
export default PageShadow;

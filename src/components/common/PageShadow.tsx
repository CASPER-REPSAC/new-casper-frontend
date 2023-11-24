import Z_INDEX from '@src/constants/zIndex';
import { AnimatePresence, motion } from 'framer-motion';
import { MouseEventHandler, ReactElement } from 'react';
import styled from 'styled-components';

interface Props {
  children?: ReactElement;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

function PageShadow({ children, onClick }: Props) {
  return (
    <AnimatePresence>
      <Wrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClick}
      >
        {children}
      </Wrapper>
    </AnimatePresence>
  );
}

const Wrapper = styled(motion.div)`
  position: fixed;
  z-index: ${Z_INDEX.pageShadow};
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default PageShadow;

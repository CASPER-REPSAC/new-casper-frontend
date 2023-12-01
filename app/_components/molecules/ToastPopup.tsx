import { styled } from 'styled-components';
import { Variants, motion } from 'framer-motion';

const popupVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 200,
    },
  },
  hover: {
    scale: 1.1,
  },
};

const ToastPopup = styled(motion.div).attrs(() => ({
  layout: true,
  variants: popupVariants,
  initial: 'hidden',
  animate: 'visible',
  exit: 'hidden',
  whileHover: 'hover',
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  min-height: 6rem;
  min-width: 20rem;
  background-color: ${({ theme }) => theme.surfaceAlt};
  border: 1px solid ${({ theme }) => theme.white};
  border-radius: 4px;
  cursor: pointer;
  padding: 1rem 2rem;
`;
export default ToastPopup;

import { Variants, motion } from 'framer-motion';
import { styled } from 'styled-components';

interface Props {
  message: string;
  onClick: () => void;
}

function ToastPopup({ message, onClick }: Props) {
  return (
    <Wrapper
      layout
      variants={popupVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      whileHover="hover"
      onClick={onClick}
    >
      {message}
    </Wrapper>
  );
}

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

const Wrapper = styled(motion.div)`
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

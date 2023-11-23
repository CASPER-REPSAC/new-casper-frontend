import { AnimatePresence, Variants, motion } from 'framer-motion';
import { styled } from 'styled-components';

interface Props {
  src: string;
  direction: number;
}

const variants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 500 : -500,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 50,
      stiffness: 700,
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 500 : -500,
    opacity: 0,
  }),
};

function Background({ src, direction }: Props) {
  return (
    <AnimatePresence initial={false} custom={direction}>
      <Img
        key={src}
        src={src}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        custom={direction}
      />
    </AnimatePresence>
  );
}

const Img = styled(motion.img)`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  filter: brightness(50%);
  z-index: -1;
  object-fit: cover;
`;

export default Background;

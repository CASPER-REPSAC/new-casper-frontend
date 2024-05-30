import { Variants, motion } from 'framer-motion';
import { ICON_SIZE } from '@app/_constants/size';
import { LeftArrowIcon, RightArrowIcon } from '../../icons';

interface Props {
  onClick: () => void;
  size?: number;
}

const variant: Variants = {
  tap: (direction: 'left' | 'right') => ({
    x: direction === 'left' ? -5 : 5,
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 500,
    },
  }),
  hover: {
    scale: 1.1,
  },
};

export function LeftButton({ onClick, size = ICON_SIZE.medium }: Props) {
  return (
    <motion.button
      type="button"
      className="cursor-pointer"
      onClick={onClick}
      variants={variant}
      whileHover="hover"
      whileTap="tap"
      custom="left"
    >
      <LeftArrowIcon size={size} />
    </motion.button>
  );
}

export function RightButton({ onClick, size = ICON_SIZE.medium }: Props) {
  return (
    <motion.button
      type="button"
      className="cursor-pointer"
      onClick={onClick}
      variants={variant}
      whileHover="hover"
      whileTap="tap"
      custom="right"
    >
      <RightArrowIcon size={size} />
    </motion.button>
  );
}

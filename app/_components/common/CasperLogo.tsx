'use client';

/* eslint-disable @typescript-eslint/no-unused-vars */
import { Variants, motion } from 'framer-motion';

interface Props {
  className: string;
  onClick?: () => void;
  size?: 'm' | 'sm' | 'lg';
}

const SIZE_CSS = {
  sm: 'w-32 h-10',
  m: 'w-56 h-16',
  lg: 'w-72 h-20',
};

function CasperLogo({ onClick, size = 'sm', className }: Props) {
  return (
    <motion.div
      className={className}
      onClick={onClick}
      variants={variants}
      whileHover="hover"
      whileTap="tap"
    >
      <div>test</div>
    </motion.div>
  );
}

const variants: Variants = {
  hover: {
    rotate: -2,
    scale: 1.1,
  },
  tap: {
    scale: 0.9,
  },
};

export default CasperLogo;

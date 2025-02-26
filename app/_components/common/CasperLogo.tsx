'use client';

import CasperLogoIcon from '@public/casper_logo.svg';
import { Variants, motion } from 'framer-motion';

interface Props {
  size?: 'm' | 'sm' | 'lg';
}

const SIZE_CSS = {
  sm: 'w-32 h-10',
  m: 'w-56 h-16',
  lg: 'w-72 h-20',
};

function CasperLogo({ size = 'sm' }: Props) {
  return (
    <motion.div variants={variants} whileHover="hover" whileTap="tap">
      <CasperLogoIcon
        className={`${SIZE_CSS[size]} fill-slate-600 dark:fill-white`}
      />
    </motion.div>
  );
}

const variants: Variants = {
  hover: {
    rotate: -1,
    scale: 1.05,
  },
  tap: {
    scale: 0.9,
  },
};

export default CasperLogo;

'use client';

import { Variants, motion } from 'framer-motion';
import CasperLogoIcon from '../../../public/casper_logo.svg';

interface Props {
  className?: string;
  onClick?: () => void;
}

function CasperLogo({ onClick, className: additionalClassName }: Props) {
  return (
    <motion.div
      className={`flex-center relative h-14 w-40 ${additionalClassName}`}
      onClick={onClick}
      variants={variants}
      whileHover="hover"
      whileTap="tap"
    >
      <CasperLogoIcon className="h-10 w-32 fill-slate-600 dark:fill-white" />
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

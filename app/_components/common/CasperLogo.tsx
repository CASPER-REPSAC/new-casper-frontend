'use client';

import themeState from 'app/_store/themeAtom';

import { Variants, motion } from 'framer-motion';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';

interface Props {
  className?: string;
  onClick?: () => void;
}

function CasperLogo({ onClick, className: additionalClassName }: Props) {
  const theme = useRecoilValue(themeState);

  const WHITE_LOGO_SRC = '/casper_logo_white.webp';
  const BLACK_LOGO_SRC = '/casper_logo_black.webp';
  const logoSrc = theme === 'dark' ? WHITE_LOGO_SRC : BLACK_LOGO_SRC;

  return (
    <motion.div
      className={`relative h-14 w-40 ${additionalClassName}`}
      onClick={onClick}
      variants={variants}
      whileHover="hover"
      whileTap="tap"
    >
      <Image
        className="object-contain"
        sizes="(min-width: 768px) 50vw, 100vw"
        src={logoSrc}
        alt="casper logo"
        fill
      />
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

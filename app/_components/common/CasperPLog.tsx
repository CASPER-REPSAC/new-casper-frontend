'use client';

import Image from 'next/image';

interface Props {
  size: number;
}

function CasperPLogo({ size }: Props) {
  const src = {
    white: '/casper_logo_p_white.webp',
    black: '/casper_logo_p_black.webp',
  };

  return (
    <>
      <Image
        className="hidden dark:block"
        src={src['white']}
        alt="CasperPLogo"
        width={size}
        height={size}
      />
      <Image
        className="block dark:hidden"
        src={src['black']}
        alt="CasperPLogo"
        width={size}
        height={size}
      />
    </>
  );
}

export default CasperPLogo;

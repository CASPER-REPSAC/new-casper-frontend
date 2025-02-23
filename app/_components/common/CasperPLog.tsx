import Image from 'next/image';

interface Props {
  variant: 'white' | 'black';
  size: number;
}

function CasperPLogo({ variant, size }: Props) {
  const src = {
    white: '/casper_logo_p_white.webp',
    black: '/casper_logo_p_black.webp',
  };

  return (
    <Image src={src[variant]} alt="CasperPLogo" width={size} height={size} />
  );
}

export default CasperPLogo;

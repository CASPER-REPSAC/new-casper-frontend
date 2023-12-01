import { PATH } from 'app/_constants/urls';
import { isDarkState } from 'app/_store';
import { Variants, motion } from 'framer-motion';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import styled, { css } from 'styled-components';

type LogoSize = 'small' | 'medium' | 'large';

interface Props {
  size?: LogoSize;
  onClick: () => void;
}

function CasperLogo({ onClick, size = 'medium' }: Props) {
  const pathname = usePathname();
  const isDark = useRecoilValue(isDarkState);
  const isHome = pathname === PATH.home.url;

  const WHITE_LOGO_SRC = '/casper_logo_white.webp';
  const BLACK_LOGO_SRC = '/casper_logo_black.webp';
  const logoSrc = isDark || isHome ? WHITE_LOGO_SRC : BLACK_LOGO_SRC;

  return (
    <Wrapper
      onClick={onClick}
      $size={size}
      variants={variants}
      whileHover="hover"
      whileTap="tap"
    >
      <StyledImage src={logoSrc} alt="casper logo" fill />
    </Wrapper>
  );
}

const variants: Variants = {
  hover: {
    rotate: 4,
    scale: 1.1,
  },
  tap: {
    scale: 0.9,
  },
};

const Wrapper = styled(motion.div)<{ $size: LogoSize }>`
  position: relative;
  cursor: pointer;

  ${({ $size }) => {
    switch ($size) {
      case 'small':
        return css`
          width: 100px;
          height: 50px;
        `;
      case 'large':
        return css`
          width: 400px;
          height: 100px;
        `;

      default:
        return css`
          width: 200px;
          height: 70px;
        `;
    }
  }}
`;

const StyledImage = styled(Image)`
  object-fit: contain;
`;

export default CasperLogo;

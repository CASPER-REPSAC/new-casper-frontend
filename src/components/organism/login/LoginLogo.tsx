import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';
import Image from 'next/image';
import { isDarkState } from '@src/recoil';

function LoginLogo() {
  const isDark = useRecoilValue(isDarkState);
  const logoSrc = isDark ? '/casper_logo_white.png' : '/casper_logo_black.png';

  return (
    <LogoWrapper>
      <LogoImg
        src={logoSrc}
        alt="casper logo"
        sizes="100%"
        fill
        blurDataURL={logoSrc}
        placeholder="blur"
      />
    </LogoWrapper>
  );
}

const LogoWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 84px;
`;
const LogoImg = styled(Image)`
  object-fit: contain;
`;

export default LoginLogo;

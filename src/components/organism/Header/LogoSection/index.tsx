import { isDarkState } from '@src/atoms';
import { PATH } from '@src/constants/urls';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { memo } from 'react';
import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';

function LogoSection() {
  const router = useRouter();
  const isDark = useRecoilValue(isDarkState);

  const isHome = router.pathname === PATH.home.url;
  const isDarkHome = isDark || isHome;
  const logoSrc = isDarkHome
    ? '/casper_logo_white.png'
    : '/casper_logo_black.png';

  return (
    <Logo onClick={() => router.push(PATH.home.url)}>
      <LogoImg
        src={logoSrc}
        alt="casper logo"
        fill
        sizes="100%"
        blurDataURL={logoSrc}
        placeholder="blur"
      />
    </Logo>
  );
}

const Logo = styled.div`
  position: relative;
  width: 100px;
  height: 100%;
  cursor: pointer;
`;
const LogoImg = styled(Image)`
  object-fit: contain;
`;

export default memo(LogoSection);

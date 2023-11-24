import { useRouter } from 'next/router';
import Image from 'next/image';
import { memo } from 'react';
import { styled } from 'styled-components';
import { useRecoilValue } from 'recoil';
import { isDarkState } from '@src/recoil';
import { PATH } from '@src/constants/urls';

function LogoSection() {
  const { pathname, push } = useRouter();
  const isDark = useRecoilValue(isDarkState);

  const isHome = pathname === PATH.home.url;
  const logoSrc =
    isDark || isHome ? '/casper_logo_white.webp' : '/casper_logo_black.webp';

  console.log(logoSrc);

  return (
    <Logo onClick={() => push(PATH.home.url)}>
      <LogoImg src={logoSrc} alt="casper logo" fill />
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

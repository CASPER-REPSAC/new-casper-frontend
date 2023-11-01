import { useRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { styled } from 'styled-components';
import { isDarkState } from '@src/atoms';
import CommonCenterWrapper from '@src/components/common/CommonCenterWrapper';
import LoadingProgressBar from '@src/components/common/LoadingProgressBar';
import { PATH } from '@src/utils/urls';
import Z_INDEX from '@src/utils/zIndex';
import PageShadow from '@src/components/common/PageShadow';
import { useState } from 'react';
import Navigation from '@src/components/molecules/Navigation';

function Header() {
  const [isDark, setIsDark] = useRecoilState(isDarkState);
  const router = useRouter();

  const isHome = router.pathname === '/';
  const isDarkHome = isDark || isHome;
  const logoSrc = isDarkHome
    ? '/casper_logo_white.png'
    : '/casper_logo_black.png';

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };
  const [pageShadowShow, setPageShadowShow] = useState(false);

  return (
    <>
      {pageShadowShow && (
        <PageShadow onClick={() => setPageShadowShow(false)} />
      )}
      <Wrapper>
        <CenterWrapper>
          <Logo onClick={() => router.push(PATH.home.url)}>
            <LogoImg src={logoSrc} alt="logo" fill sizes="200px" />
          </Logo>
          <button type="button" onClick={toggleDarkMode}>
            dark/light
          </button>
          <Navigation
            onMouseOver={() => setPageShadowShow(true)}
            onMouseOut={() => setPageShadowShow(false)}
          />
        </CenterWrapper>
        <LoadingProgressBar />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  position: relative;
  z-index: ${Z_INDEX.header};

  width: 100vw;
  height: 60px;
  border-bottom: 1px solid ${({ theme }) => theme.borderDefault};
`;

const CenterWrapper = styled(CommonCenterWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;
const Logo = styled.div`
  position: relative;
  width: 100px;
  height: 100%;
  cursor: pointer;
`;
const LogoImg = styled(Image)`
  object-fit: contain;
`;

export default Header;
